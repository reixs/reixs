import handleFetch from '../../../src/core/request/handle-fetch'

// Mock create request
function createResponse(header, data, statusCode) {
    return {
        status: statusCode,
        headers: {
            get(key) {
                return header[key]
            }
        },
        text() {
            return data.toString()
        },
        json() {
            return JSON.parse(data)
        }
    }
}

describe('HandleFetch handles promise objects', function () {
    it('Can throw error', async function (done) {
        const requestBody1 = await handleFetch(Promise.resolve(createResponse({
            'content-type': 'application/json'
        }, '{"id":1,"name":1}', 200)))
        const requestBody2 = await handleFetch(Promise.resolve(createResponse({
            'content-type': 'application/text'
        }, [1, 2, 3], 200)))
        expect(requestBody1).toEqual({
            id: 1,
            name: 1
        })
        expect(requestBody2).toEqual('1,2,3')
        try {
            await handleFetch(Promise.resolve(createResponse({
                'content-type': 'application/text'
            }, '{"id":1,"name":1}', 404)))
            expect(false).toEqual(true)
        } catch (error) {
            expect(true).toEqual(true)
        }
        done()
    })
})