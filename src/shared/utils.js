import kindOf from 'kind-of'

/**
 * Data processing
 *
 * @param {Array} pipes
 * @param {*} data
 */
export function dataFiltering(pipes, data) {
    return pipes.reduce((prev, cur) => cur(prev), data)
}

/**
 * Convert to string
 *
 * @param {*} value
 */
export function toString(value) {
    if (kindOf(value) === 'undefined') {
        return 'undefined'
    } else if (kindOf(value) === 'null') {
        return ''
    } else {
        return value.toString()
    }
}
