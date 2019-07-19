import requestTimer from '../../../src/core/create-request/request-timer'

// Simulation of the request
function requestHandle () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 3000)
    })
}

describe('Detect timeout', function () {
    it('Normal request and returned false', async function (done) {
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

    it('Request timed out and returned true', async function (done) {
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

    it('Normal request when the timeout value is null', async function (done) {
        let result
        try {
            result = await requestTimer(requestHandle(), null)
        } catch (error) {
            result = error
        }

        expect(result.timeout).toEqual(false)
        done()
    })

    it('Request timed out and returned true when the timeout value is 0', async function (done) {
        let result
        try {
            // Set the timeout value to 0
            result = await requestTimer(requestHandle(), 0)
        } catch (error) {
            result = error
        }

        expect(result.timeout).toEqual(true)
        done()
    })
})
