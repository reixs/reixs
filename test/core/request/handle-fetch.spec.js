import handleFetch from '../../../src/core/request/handle-fetch'

describe('HandleFetch handles promise objects', function () {
    it('Can throw error', async function (done) {
        let abnormal
        try {
            await handleFetch(Promise.reject('abnormal'))
        } catch (error) {
            abnormal = error
        }
        expect(abnormal).toEqual('abnormal')
        done()
    })
})