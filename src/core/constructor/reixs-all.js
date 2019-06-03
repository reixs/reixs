
import createRequest from '../create-request'

import Scheduler from './scheduler'

/**
 *  Separate request object
 */
export default class ReixsAll  extends Scheduler {
    _schedulers = []

    constructor(...schedulers) {
        super()
        this._schedulers = schedulers
        this._initRequest()
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
     * Concurrent all scheduler
     * 
     */
    async _sendRequest() {
        const {_schedulers} = this
        const data = await Promise.all(_schedulers.map(scheduler=>{
            return new Promise( resolve => {
                scheduler.request.call({
                    ...scheduler, 
                    injection(data) {
                        resolve(data)
                    }
                })
            })
        }))
        return data
    }
}
