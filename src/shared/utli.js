export function checkStatus(response) {
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error()
    }
}

export function handleFetch(promise) {
    return promise
        .then(response => checkStatus(response))
        .catch(error => {
            throw error
        })
}