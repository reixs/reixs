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
    let sym
    let work = false
    let wait = false
    return async function(...par) {
        const {throttle, discard, debounce, overtime} = config
        const {startHook, endHook} = hook

        /**
         *  If throttle is set, the function must be idle to send the request.
         *  If debounce is set. The request will not be triggered repeatedly 
         *  for a specified period of time.
         */
        if ((work && throttle) || wait) { 
            return 
        } 

        work = true
        wait = true
        await createWait(debounce)
        wait = false
        startHook && startHook()
        const mark = Symbol()
        sym = mark

        const {timeout, data} = await requestTimer(sendRequest(...par), overtime)

        // If discard is set, the duplicate request is discarded
        if (sym === mark || !discard) {
            // If the timeout occurs, the task is not processed
            if (!timeout) {
                execute(data)
            }

            endHook && endHook(timeout ? 'timeout' : 'successful')
            work = false
        }
    }
}

