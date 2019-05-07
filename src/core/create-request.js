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
    return async function(...par) {
        const {throttle, discard} = config
        const {startHook, endHook} = hook
        if (work && throttle) { 
            return 
        } 

        work = true
        startHook && startHook(...par)
        const mark = Symbol()
        sym = mark
        const data = await sendRequest(...par)

        if (sym === mark || !discard) {
            // execution task list
            execute(data)

            endHook && endHook(...par)
            work = false
        }
    }
}

