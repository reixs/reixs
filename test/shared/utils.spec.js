import {dataFiltering, isPlainObject} from '../../src/shared/utils'

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

describe('Plain Object', function () {
    it('Allow the Object literals', function (done) {
        expect(isPlainObject({})).toEqual(true)
        expect(isPlainObject({name: 'obj'})).toEqual(true)
        done()
    })

    it('Built-in objects are not allowed', function (done) {
        expect(isPlainObject(new Date())).toEqual(false)
        expect(isPlainObject(new Array())).toEqual(false)
        done()
    })

    it('Objects created by "Object.create" are not allowed', function (done) {
        expect(isPlainObject(Object.create(null))).toEqual(false)
        expect(isPlainObject(Object.create({}))).toEqual(false)
        done()
    })
})