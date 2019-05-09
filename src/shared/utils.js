/**
 * Data processing
 *
 * @param {*} data 
 */
export function dataFiltering(pipes, data, errorHook) {
    try {
        const newData = [data, ...pipes].reduce((prev, cur)=>cur(prev))
        return newData
    } catch (error) {
        errorHook(error)
    }
}