import {CONTENT_TYPE} from '../../shared/constants'
import handleFetch from './handle-fetch'
import {isPlainObject} from '../../shared/utils'

/**
 * Query String Parameters
 *
 * @param {string} url
 * @param {*} data
 * @param {Object} headers
 * @param {boolean} cookie
 */
export function get(url, data, headers, cookie) {
    url = new URL(url)
    if (isPlainObject(data)) {
        Object.keys(data)
            .forEach(key => url.searchParams.append(key, data[key]))
    } else {
        url.search = data.toString()
    }
    const promise = fetch(url, {
        method: 'GET',
        headers: {
            ...headers
        },
        credentials: cookie ? 'include' : 'omit'
    })
    return handleFetch(promise)
}

/**
 * Dynamic Router
 *
 * @param {string} url
 * @param {*} data
 * @param {Object} headers
 * @param {boolean} cookie
 */
export function push(url, data, headers, cookie) {
    url = new URL(url)
    url.pathname += `/${data.toString()}`
    const promise = fetch(url, {
        method: 'GET',
        headers: {
            ...headers
        },
        credentials: cookie ? 'include' : 'omit'
    })
    return handleFetch(promise)
}

/**
 * Request Payload
 *
 * @param {string} url
 * @param {*} data
 * @param {Object} headers
 * @param {boolean} cookie
 */
export function post(url, data, headers, cookie) {
    url = new URL(url)
    if (isPlainObject(data)) {
        data = JSON.stringify(data)
    }
    const promise = fetch(url, {
        method: 'POST',
        body: data.toString(),
        headers: {
            'Content-type': CONTENT_TYPE['JSON'],
            ...headers
        },
        credentials: cookie ? 'include' : 'omit'
    })
    return handleFetch(promise)
}

/**
 * Form Data
 *
 * @param {string} url
 * @param {*} data
 * @param {Object} headers
 * @param {boolean} cookie
 */
export function form(url, data, headers, cookie) {
    url = new URL(url)
    let fromData = ''
    if (isPlainObject(data)) {
        Object.keys(data).forEach(key => {
            fromData += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`
        })
    } else {
        fromData = data.toString()
    }
    const promise = fetch(url, {
        method: 'POST',
        body: fromData,
        headers: {
            'Content-type': CONTENT_TYPE['FORM'],
            ...headers
        },
        credentials: cookie ? 'include' : 'omit'
    })
    return handleFetch(promise)
}
