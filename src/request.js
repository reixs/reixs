import {handleFetch} from './shared/utli'

export default {
    get(url, params) {
        url = new URL(url)
        Object.keys(params)
            .forEach(key => url.searchParams.append(key, params[key]))
        const promise = fetch(url, {
            method: 'get'
        })
        return handleFetch(promise)
    }
}