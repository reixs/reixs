
/**
 * Check for success
 * 
 * @param {Object} response 
 */
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
            return response.json()
        } else {
            return response.text()
        }
    } else {
        throw new Error()
    }
}

/**
 * Handle fetch
 * 
 * @param {Object} promise 
 */
export default function handleFetch(promise) {
    return promise
        .then(response => checkStatus(response))
        .catch(error => {
            throw error
        })
}