import {ThrottleWait, DebounceWait} from '../../../src/core/create-request/Wait'

describe('500 milliseconds Throttle', function () {
    const ms = 500

    it('Only the first time in 500 milliseconds is not blocked', function (done) {
        const throttleWait = new ThrottleWait()
        let index
        ([1, 2, 3]).forEach(async num => {
            await throttleWait.get(ms)
            index = num
        })
        setTimeout(()=>{
            expect(index).toEqual(1)
            done()
        }, 800)
    })

    it('Get it every 800 milliseconds and it won\'t block', function (done) {
        const throttleWait = new ThrottleWait()
        let num = 0
        let index = 0
        setInterval(async () => {
            index += index
            await throttleWait.get(ms)
            num += num
        }, 800)
        expect(num).toEqual(index)
        done()
    })
})

describe('500 milliseconds Debounce', function () {
    const ms = 500

    it('Only the last time in 500 milliseconds was not blocked', function (done) {
        const debounceWait = new DebounceWait()
        let index
        ([1, 2, 3]).forEach(async num => {
            await debounceWait.get(ms)
            index = num
        })
        setTimeout(()=>{
            expect(index).toEqual(3)
            done()
        }, 800)
    })

    it('Get it every 800 milliseconds and it won\'t block', function (done) {
        const debounceWait = new DebounceWait()
        let num = 0
        let index = 0
        setInterval(async () => {
            index += index
            await debounceWait.get(ms)
            num += num
        }, 800)
        expect(num).toEqual(index)
        done()
    })
})
