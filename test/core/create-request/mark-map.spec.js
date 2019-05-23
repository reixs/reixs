import MarkMap from '../../../src/core/create-request/mark-map'

describe('Audit is false, Whether the MarkMap will give the correct validation', function () {
    const audit = false
    it('Three in a row', function (done) {
        const markMap = new MarkMap()
        const mark1 = markMap.get(audit)
        const mark2 = markMap.get(audit)
        const mark3 = markMap.get(audit)
        expect(markMap.test(mark1)).toEqual(true)
        expect(markMap.test(mark2)).toEqual(true)
        expect(markMap.test(mark3)).toEqual(true)
        done()
    })

    it('Test three times', function (done) {
        const markMap = new MarkMap()
        const test1 = markMap.test(markMap.get(audit))
        const test2 = markMap.test(markMap.get(audit))
        const test3 = markMap.test(markMap.get(audit))
        expect(test1).toEqual(true)
        expect(test2).toEqual(true)
        expect(test3).toEqual(true)
        done()
    })
})

describe('Audit is true, The old mark failed test', function () {
    const audit = true
    it('Three in a row', function (done) {
        const markMap = new MarkMap()
        const mark1 = markMap.get(audit)
        const mark2 = markMap.get(audit)
        const mark3 = markMap.get(audit)
        expect(markMap.test(mark1)).toEqual(false)
        expect(markMap.test(mark2)).toEqual(false)
        expect(markMap.test(mark3)).toEqual(true)
        done()
    })

    it('Test three times', function (done) {
        const markMap = new MarkMap()
        const test1 = markMap.test(markMap.get(audit))
        const test2 = markMap.test(markMap.get(audit))
        const test3 = markMap.test(markMap.get(audit))
        expect(test1).toEqual(true)
        expect(test2).toEqual(true)
        expect(test3).toEqual(true)
        done()
    })
})


describe('Audit is time, Different validations are made according to the time interval for getting mark', function () {
    const audit = 1000
    it('Not exceeding the time limit', function (done) {
        const markMap = new MarkMap()
        const mark1 = markMap.get(audit)
        let mark2
        setTimeout(function () {
            mark2 = markMap.get(audit)
            expect(markMap.test(mark1)).toEqual(false)
            expect(markMap.test(mark2)).toEqual(true)
            done()
        }, 500)
    })

    it('Beyond the time', function (done) {
        const markMap = new MarkMap()
        const mark1 = markMap.get(audit)
        let mark2
        setTimeout(function () {
            mark2 = markMap.get(audit)
            expect(markMap.test(mark1)).toEqual(true)
            expect(markMap.test(mark2)).toEqual(true)
            done()
        }, 2000)
    })
})
