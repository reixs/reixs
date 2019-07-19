import reixs from '../src/reixs'

describe('The version of reixs', function () {
    it('Is it consistent with the NPM version', function (done) {
        expect(reixs.version).toEqual('__VERSION__')
        done()
    })
})