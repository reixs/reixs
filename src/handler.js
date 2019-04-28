import {METHOD_TYPES} from './shared/constants'
import request from './request'

export default class {
    constructor(...args) {
        const [global, globalPipes, url, method = 'get', params = null] = args
        // Cannot be modified
        this.url = url
        this.globalHeader = {...global.globalHeader}
        this.globalParams = {...global.globalParams}
        this.globalReqPipes = [...globalPipes.reqPipes]
        this.globalResPipes = [...globalPipes.resPipes]
        this.params = params
        this.setMethod(method)
    }

    observers = []

    on(observer) {
        this.observers.push(observer)
        return this
    }
    
    request = async (params = this.params, type) =>{
        const {url, method, globalParams} = this
        const requestType = type ? type : method
        const requestParams = requestType === 'push' 
            ? params : {
                ...globalParams,
                ...params
            }
        const data = await request[requestType](
            url, 
            requestParams
        )
        this.execute(data)
    }

    execute(data) {
        this.observers.forEach(observer =>{
            observer(data)
        })
    }

    setParams(params) {
        this.params = params
    }
    
    setMethod(method = null) {
        if (METHOD_TYPES.includes(method)) {
            this.method = method
        } else {
            throw new Error('Invalid method')
        }
    }
}

