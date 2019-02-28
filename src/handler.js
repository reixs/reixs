export default class {
    constructor(...args) {
        const [global, globalPipes, url, method = 'get', params = null] = args
        // Cannot be modified
        this.entity = fetch(url)
        this.globalHeader = {...global.globalHeader}
        this.globalParams = {...global.globalParams}
        this.globalReqPipes = [...globalPipes.reqPipes]
        this.globalResPipes = [...globalPipes.resPipes]
        this.method = method
        this.params = params
    }
}

