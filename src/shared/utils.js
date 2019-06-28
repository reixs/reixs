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
  
