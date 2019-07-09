import handleFetch from '../../../src/core/request/handle-fetch'

describe('HandleFetch handles promise objects', function () {
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
    it('Can throw error', async function (done) {
        try {
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
        } catch (error) {
            const requestError = await handleFetch(Promise.reject(createResponse({
                'content-type': 'application/json'
            }, '{"id":1,"name":1}', 404)))
            expect(requestError).toEqual(error)
        }
        done()
    })
})