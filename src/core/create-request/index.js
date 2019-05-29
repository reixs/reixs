import MarkMap from './mark-map'
import {ThrottleWait, DebounceWait} from './wait'
import requestTimer from './request-timer'

/**
 * The method to create the request
 * 
 * @param {Object} config 
 * @param {Function} sendRequest 
 * @param {Array} execute 
 * @param {Object} hook 
 */ 
export default function(config, sendRequest, execute, hook) {
    const markMap = new MarkMap()
    const throttleWait = new ThrottleWait()
    const debounceWait = new DebounceWait()
    return async function(...par) {
        const {prepareHook, startHook, endHook} = hook
        const {throttle, debounce, audit, overtime} = config
        prepareHook && prepareHook()
        let mark
        if (audit) {
            mark = markMap.get(audit)
        }
        await Promise.all([
            throttleWait.get(throttle), 
            debounceWait.get(debounce)
        ])
        startHook && startHook()
        const {timeout, data} = await requestTimer(sendRequest(...par), overtime)

        if (data === undefined) {
            endHook && endHook()
            return 
        }
        // If audit is set, the duplicate request is discarded
        if (!audit || markMap.test(mark)) {
            // If the timeout occurs, the task is not processed
            if (!timeout) {
                this._execute(data) && execute(data)
            }
            endHook && endHook()
        }
    }
}