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
export default function requestTimer(promise, time) {
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