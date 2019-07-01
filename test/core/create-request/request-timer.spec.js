import requestTimer from '../../../src/core/create-request/request-timer'

function requestHandle () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 3000)
    })
}

describe('Detect timeout', function () {
    it('Normal request', async function (done) {
        let result
        try {
            // Set the timeout value to 5000
            result = await requestTimer(requestHandle(), 5000)
        } catch (error) {
            result = error
        }

        expect(result.timeout).toEqual(false)
        done()
    })

    it('Request timed out and returned false', async function (done) {
        let result
        try {
            // Set the timeout value to 1000
            result = await requestTimer(requestHandle(), 1000)
        } catch (error) {
            result = error
        }

        expect(result.timeout).toEqual(true)
        done()
    })
})
