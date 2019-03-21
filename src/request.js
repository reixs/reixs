function checkStatus(response) {
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error()
    }
}

function handleFetch(promise) {
    return promise
        .then(response => checkStatus(response))
        .catch(error => error)
}

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