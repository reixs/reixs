/**
 * Data processing
 * 
 * @param {Array} pipes 
 * @param {*} data 
 */
export function dataFiltering(pipes, data) {
    const newData = pipes.reduce((prev, cur) => cur(prev), data)
    return newData
}
  
