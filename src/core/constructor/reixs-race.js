
import createRequest from '../create-request'

import Scheduler from './scheduler'

/**
 *  Multiple request race
 */
export default class ReixsRace  extends Scheduler {
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
     * The scheduler for the race
     * 
     */
    async _sendRequest() {
        const {_schedulers} = this
        const data = await Promise.race(_schedulers.map(scheduler=>{
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
