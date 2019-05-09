import {CONTENT_TYPE} from '../shared/constants'
import handleFetch from './handle-fetch'

export default {
    get(url, params, headers, cookie) {
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
    },

    push(url, params, headers, cookie) {
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
    },

    post(url, params, headers, cookie) {
        url = new URL(url)
        const promise = fetch(url, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-type': CONTENT_TYPE['JSON'],
                ...headers
            },
            credentials: cookie ? 'include' : 'omit'
        })
        return handleFetch(promise)
    },
    
    form(url, params, headers, cookie) {
        url = new URL(url)
        const promise = fetch(url, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-type': CONTENT_TYPE['FORM'],
                ...headers
            },
            credentials: cookie ? 'include' : 'omit'
        })
        return handleFetch(promise)
    }
}