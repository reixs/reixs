import {dataFiltering} from '../../shared/utils'
import {METHOD_TYPES} from '../../shared/constants'

import createRequest from '../create-request'
import * as request from '../request'

import Scheduler from './scheduler'

/**
 *  Separate request object
 */
class Reixs  extends Scheduler {
    constructor(url, method = 'get', params = null) {
        super()

        // Initialize the http
        this._http = {
            ...this._http,
            url,
            params
        }
        this.setMethod(method)

        // Create request function
        this._initRequest()
    }

    // Multiple requests Shared
    static global = {
        globalHeader: {},
        globalParams: {},
        reqPipes: [],
        resPipes: [],
        beforeReq: null,
        afterReq: null,
        beforeRes: null,
        afterRes: null
    }

    // Network request information
    _http = {
        url: '',
        method: null,
        header: {},
        params: null,
        cookie: true
    }

    // Data filtering
    _pipes = {
        reqPipes: [],
        resPipes: []
    }

    // Different stage interceptors
    _interceptors = {
        beforeReq: null, 
        afterReq: null, 
        beforeRes: null, 
        afterRes: null
    }

    /**
     * Complete request header
     * 
     * @return {Object} 
     */
    get requesetHeader() {
        const {header} = this._http
        const {globalHeader} = Reixs.global
        return Object.assign(globalHeader, header)
    }
    
    /**
     * Complete request parameters
     * 
     * @param {Object} params 
     */
    _getParams(params) {
        const {globalParams} = Reixs.global
        return Object.assign(globalParams, params)
    }

    /**
     * Create request function
     */
    _initRequest() {
        const {_config, _sendRequest, _execute, _hook} = this
        this.request = createRequest(
            _config, 
            _sendRequest.bind(this), 
            _execute.bind(this), 
            _hook
        )
    }

    /**
     * Set the request url
     * 
     * @param {string} url 
     */
    setUrl(url) {
        if (typeof url === 'string') {
            this._http.url = url
        } else {
            throw new Error('Invalid type')
        }
        return this
    }
    
    /**
     * Set the request header
     * 
     * @param {Object} header 
     */
    setHeader(header) {
        if (header.constructor === Object) {
            this._http.header = header
        } else {
            throw new Error('Header invalid setting')
        }
        return this
    }

    /**
     * Set request parameters
     * 
     * @param {*} params 
     */
    setParams(params) {
        this._http.params = params
        return this
    }
    
    /**
     * Set whether to carry cookies
     * 
     * @param {boolean} ifCookie 
     */
    setCookie(ifCookie) {
        if (typeof ifCookie === 'boolean') {
            this._http.cookie = ifCookie
        } else {
            throw new Error('Invalid type')
        }
        return this
    }

    /**
     * Set the request method
     * 
     * @param {string} method 
     */
    setMethod(method = null) {
        method = method.toLowerCase()
        if (METHOD_TYPES.includes(method)) {
            this._http.method = method
        } else {
            throw new Error('Invalid method')
        }
        return this
    }
    
    /**
     * Set the request filter pipeline
     * 
     * @param  {...any} pipes 
     */
    reqPipes(...pipes) {
        if (pipes.find(pipe =>typeof pipe !== 'function')) {
            throw new Error('Pipe must be a function')
        } else {
            this._pipes.reqPipes = [...pipes]
        }
        return this
    }

    /**
     * Set the response filter pipeline
     * 
     * @param  {...any} pipes 
     */
    resPipes(...pipes) {
        if (pipes.find(pipe =>typeof pipe !== 'function')) {
            throw new Error('Pipe must be a function')
        } else {
            this._pipes.resPipes = [...pipes]
        }
        return this
    }

    /**
     * Set request interceptor
     * @param {Function} interceptor 
     */
    reqInterceptor(interceptor) {
        if (typeof interceptor === 'function') {
            if (this._pipes.reqPipes.length) {
                this._interceptors.afterReq = interceptor
            } else {
                this._interceptors.beforeReq = interceptor
            }
            return this
        } else {
            throw new Error('Invalid type')
        }
    }
    
    /**
     * Set response interceptor
     * @param {Function} interceptor 
     */
    resInterceptor(interceptor) {
        if (typeof interceptor === 'function') {
            if (this._pipes.resPipes.length) {
                this._interceptors.afterRes = interceptor
            } else {
                this._interceptors.beforeRes = interceptor
            }
            return this
        } else {
            throw new Error('Invalid type')
        }
    }

    /**
     * Send the request to the server
     * 
     * @param {*} params 
     * @param {string} type 
     */
    async _sendRequest(params = this._http.params, type) {
        const {url, method, cookie} = this._http
        const {errorHook} = this._hook
        const {reqPipes, resPipes} = this._pipes
        const {beforeReq, afterReq, beforeRes, afterRes} = this._interceptors
        const {
            reqPipes: globalReqPipes, 
            resPipes: globalResPipes,
            beforeReq: globalBeforeReq,
            afterReq: globalAfterReq,
            beforeRes: globalBeforeRes,
            afterRes: globalAfterRes
        } = this.constructor.global
        
        const requestType = type ? type : method
        const requestParams = requestType === 'push' 
            ? params : this._getParams(params)

        if ((globalBeforeReq && globalBeforeReq(requestParams) === false) 
        || (beforeReq && beforeReq(requestParams) === false)) {
            return 
        }

        let finalParams
        try {
            finalParams = dataFiltering([...globalReqPipes, ...reqPipes], requestParams)
        } catch (error) {
            errorHook(error)
        }
        
        if ((globalAfterReq && globalAfterReq(finalParams) === false) 
        || (afterReq && afterReq(finalParams) === false)) {
            return 
        }

        const data = await request[requestType](
            url, 
            finalParams,
            this.requesetHeader,
            cookie
        )
        
        
        if ((globalBeforeRes && globalBeforeRes(data) === false) 
        || (beforeRes && beforeRes(data) === false)) {
            return 
        }

        let finalData
        try {
            finalData = dataFiltering([...globalResPipes, ...resPipes], data)
        } catch (error) {
            errorHook(error)
        }

        if ((globalAfterRes && globalAfterRes(finalData) === false) 
        || (afterRes && afterRes(finalData) === false)) {
            return 
        }

        return finalData
    }
}

// Bind request category 
METHOD_TYPES.map(requestType=>{
    Reixs.prototype[requestType] = function(params) {
        this.request(params, requestType)
    }
})

export default Reixs