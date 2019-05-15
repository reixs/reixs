import MarkMap from './mark-map'

/**
 * Create delay promise
 * 
 * @param {number} time 
 */
function createWait(time) {
    return time === 0 ? Promise.resolve()
        : new Promise(resolve=>{
            setTimeout(()=>resolve(), time)
        })
}

/**
 * Detect timeout
 * 
 * @param {Promise} promise 
 * @param {null|number} time 
 */
function requestTimer(promise, time) {
    const request = promise.then(data=>({
        timeout: false, 
        data
    }))
    const timer = createWait(time).then(()=>({
        timeout: true, 
        data: null
    }))
    return time === null ? request
        : Promise.race([request, timer])
}

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
    return async function(...par) {
        const {startHook, endHook} = hook
        const {audit, overtime} = config
        startHook && startHook(...par)
        let mark
        if (audit) {
            mark = markMap.get(audit)
        }
        const {timeout, data} = await requestTimer(sendRequest(...par), overtime)
        // If audit is set, the duplicate request is discarded
        if (!audit || markMap.test(mark)) {
            // If the timeout occurs, the task is not processed
            if (!timeout) {
                execute(data)
            }
            endHook && endHook()
        }
    }
}