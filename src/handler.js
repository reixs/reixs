export default class {
    constructor(...agus) {
        const [global, globalPipes, url, method = 'get', params = null] = agus
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