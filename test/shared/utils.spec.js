import {dataFiltering} from '../../src/shared/utils'

describe('Data pipeline', function () {
    const num = dataFiltering([
        num => num + 1, 
        num => num + 2,
        num => num + 3,
        num => num + 4
    ], 0)
    it('0 + 1 + 2 + 3 + 4 = 10', function (done) {
        expect(num).toEqual(10)
        done()
    })
})
