import {CONTENT_TYPE} from '../../shared/constants'
import handleFetch from './handle-fetch'


/**
 * Query String Parameters
 *
 * @param {string} url
 * @param {*} params
 * @param {Object} headers
 * @param {boolean} cookie
 */
export function get(url, params, headers, cookie) {
    url = new URL(url)
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]))
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
 * @param {*} params
 * @param {Object} headers
 * @param {boolean} cookie
 */
export function push(url, params, headers, cookie) {
    url = new URL(url)
    url.pathname += `/${params}`
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
    const promise = fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
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
 * @param {*} formData
 * @param {Object} headers
 * @param {boolean} cookie
 */
export function form(url, formData, headers, cookie) {
    url = new URL(url)
    const promise = fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
            'Content-type': CONTENT_TYPE['FORM'],
            ...headers
        },
        credentials: cookie ? 'include' : 'omit'
    })
    return handleFetch(promise)
}
