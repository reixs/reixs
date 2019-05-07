import {METHOD_TYPES} from '../shared/constants'
import request from './request'
import Handler from './handler'
import createRequest from './create-request'

export default class extends Handler {
    constructor(...args) {
        const [global, globalPipes, url, method = 'get', params = null] = args
        const {globalHeader, globalParams} = global

        super(globalReqPipes, globalResPipes)

        const {globalReqPipes, globalResPipes} = globalPipes
        const {config, sendRequest, execute, hook} = this

        this.http = {
            ...this.http,
            url,
            globalHeader,
            globalParams,
            params
        }

        this.setMethod(method)
    
        this.request = createRequest(
            config, 
            sendRequest, 
            execute.bind(this), 
            hook
        )

        // Bind request category
        METHOD_TYPES.map(requestType=>{
            this[requestType] = params => this.request(params, requestType) 
        })
    }

    http = {
        url: '',
        method: null,
        globalHeader: {},
        globalParams: null,
        header: {},
        params: null,
        cookie: true
    }

    get requesetHeader() {
        const {globalHeader, header} = this.http
        return {
            ...globalHeader, 
            ...header
        }
    }
    
    get requestParams() {
        const {globalParams, params} = this.http
        return {
            ...globalParams, 
            ...params
        }
    }

    setUrl(url) {
        if (typeof url === 'string') {
            this.http.url = url
        } else {
            throw new Error('Invalid type')
        }
        return this
    }
    
    setHeader(header) {
        if (header.constructor === Object) {
            this.http.header = header
        } else {
            throw new Error('Header invalid setting')
        }
        return this
    }

    setParams(params) {
        this.http.params = params
        return this
    }
    
    setCookie(ifCookie) {
        if (typeof ifCookie === 'boolean') {
            this.http.cookie = ifCookie
        } else {
            throw new Error('Invalid type')
        }
        return this
    }

    setMethod(method = null) {
        method = method.toLowerCase()
        if (METHOD_TYPES.includes(method)) {
            this.http.method = method
        } else {
            throw new Error('Invalid method')
        }
        return this
    }

    sendRequest = async (params = this.params, type) =>{
        const {url, method, cookie} = this.http

        const requestType = type ? type : method
        const requestParams = requestType === 'push' 
            ? params : this.requestParams
        const data = await request[requestType](
            url, 
            requestParams,
            this.requesetHeader,
            cookie
        )
        
        return data
    }
}

