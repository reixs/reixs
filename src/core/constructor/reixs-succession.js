
import createRequest from '../create-request'

import Scheduler from './scheduler'

/**
 *  The scheduler is in series with the scheduler
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
     * The order request
     * 
     */
    async _sendRequest() {
        const {_schedulers} = this
        const data = await _schedulers.reduce((promise, scheduler) => {
            return new Promise( resolve => {
                promise.then(data => {
                    scheduler.request.call({
                        ...scheduler, 
                        injection(data) {
                            resolve(data)
                        }
                    }, data)
                })
            })
        }, Promise.resolve()) 
        return data
    }
}
