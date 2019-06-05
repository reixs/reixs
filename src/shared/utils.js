/**
 * Data processing
 * 
 * @param {Array} pipes 
 * @param {*} data 
 */
export function dataFiltering(pipes, data) {
    const newData = [data, ...pipes].reduce((prev, cur)=>cur(prev))
    return newData
}

/**
 * Determines whether it is a literal object
 * 
 * @param {Object} obj 
 */
export function isPlainObject(obj) {
    if (typeof obj !== 'object' || obj === null) return false
  
    let proto = obj
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto)
    }
  
    return Object.getPrototypeOf(obj) === proto
}
  