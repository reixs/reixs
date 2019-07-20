import {get} from '../../../src/core/request'
describe('Test get request', function () {
    it('Request list', async function (done) {
        const data = await get('https://api.apiopen.top/getAllUrl')
        expect(Array.isArray(data)).toEqual(true)
        done()
    })
})