import reixs from '../src/reixs'
describe('version', function() {
    it('__VERSION__', function(done) {
        expect(reixs.version).toEqual('__VERSION__')
        done()
    })
})