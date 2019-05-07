import {METHOD_TYPES} from '../shared/constants'

export default class {
    constructor(globalReqPipes, globalResPipes) {
        this.pipes = {
            ...this.pipes,
            globalReqPipes,
            globalResPipes
        }
    }

    config = {
        throttle: false,
        discard: false,
        debounce: 0,
        overtime: null
    }

    hook = {
        tartHook: null,
        endHook: null,
        errorHook: null
    }

    pipes = {
        globalReqPipes: [],
        globalResPipes: []
    }

    taskList =[]

    setDiscard(ifDiscard) {
        this.config.discard = ifDiscard
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
    
    setMethod(method = null) {
        method = method.toLowerCase()
        if (METHOD_TYPES.includes(method)) {
            this.http.method = method
        } else {
            throw new Error('Invalid method')
        }
        return this
    }
    
    task(task) {
        this.taskList.push(task)
        return this
    }

    start(startHook) {
        this.hook.startHook = startHook
        return this
    }
    
    end(endHook) {
        this.hook.endHook = endHook
        return this
    }
    
    error(errorHook) {
        this.hook.errorHook = errorHook
        return this
    }
    
    execute(data) {
        const {errorHook} = this.hook
        if (data !== undefined) {
            try {
                this.taskList.forEach(task =>{
                    task(data)
                })
            } catch (error) {
                errorHook && errorHook(error)
            }
        }
    }
}

