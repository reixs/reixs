import Scheduler from '../../../src/core/constructor/scheduler.js'
describe('Whether the scheduler of  _config object property changes', function () {
    it('The throttle function parameter is false', function (done) {
        const scheduler = new Scheduler()
        const test1 = scheduler.throttle(500)
        expect(test1._config.throttle).toEqual(500)
        done()
    })
    it('The throttle function parameter is number', function (done) {
        const scheduler = new Scheduler()
        const test1 = scheduler.throttle(false)
        expect(test1._config.throttle).toEqual(false)
        done()
    })
    it('The throttle function can throw error', function (done) {
        try {
            const scheduler = new Scheduler()
            scheduler.throttle('fail')
            expect(false).toEqual(true)
        } catch (error) {
            expect(true).toEqual(true)
        }
        done()
    })
    it('The debounce function parameter is number', function (done) {
        const scheduler = new Scheduler()
        const test1 = scheduler.debounce(200)
        expect(test1._config.debounce).toEqual(200)
        done()
    })
    it('The debounce function  parameter is false', function (done) {
        const scheduler = new Scheduler()
        const test1 = scheduler.debounce(false)
        expect(test1._config.debounce).toEqual(false)
        done()
    })
    it('The debounce function can throw error', function (done) {
        try {
            const scheduler = new Scheduler()
            scheduler.debounce(true)
            expect(false).toEqual(true)
        } catch (error) {
            expect(true).toEqual(true)
        }
        done()
    })
    it('The audit function parameter is number', function (done) {
        const scheduler = new Scheduler()
        const test1 = scheduler.audit(200)
        expect(test1._config.audit).toEqual(200)
        done()
    })
    it('The audit function  parameter is false', function (done) {
        const scheduler = new Scheduler()
        const test1 = scheduler.audit(false)
        expect(test1._config.audit).toEqual(false)
        done()
    })
    it('The audit function  can throw error', function (done) {
        try {
            const scheduler = new Scheduler()
            scheduler.audit('audit')
            expect(false).toEqual(true)
        } catch (error) {
            expect(true).toEqual(true)
        }
        done()
    })
    it('The overtime function parameter is number', function (done) {
        const scheduler = new Scheduler()
        const test1 = scheduler.overtime(200)
        expect(test1._config.overtime).toEqual(200)
        done()
    })
    it('The overtime function parameter is null', function (done) {
        const scheduler = new Scheduler()
        const test1 = scheduler.overtime(null)
        expect(test1._config.overtime).toEqual(null)
        done()
    })
    it('The overtime function  can throw error', function (done) {
        try {
            const scheduler = new Scheduler()
            scheduler.overtime(true)
            expect(false).toEqual(true)
        } catch (error) {
            expect(true).toEqual(true)
        }
        done()
    })
})
describe('Whether the scheduler of _hook object property changes', function () {
    function testPrepare() {
        return 'prepareHook'
    }

    function testStart() {
        return 'startHook'
    }

    function testEnd() {
        return 'endHook'
    }

    function testError() {
        return 'errorHook'
    }
    it('The prepare function parameter is function', function (done) {
        const scheduler = new Scheduler()
        const test1 = scheduler.prepare(testPrepare)
        expect(test1._hook.prepareHook).toEqual(testPrepare)
        done()
    })
    it('The prepare function can throw error', function (done) {
        try {
            const scheduler = new Scheduler()
            scheduler.prepare(123)
            expect(false).toEqual(true)
        } catch (error) {
            expect(true).toEqual(true)
        }
        done()
    })
    it('The start function parameter is function', function (done) {
        const scheduler = new Scheduler()
        const test1 = scheduler.start(testStart)
        expect(test1._hook.startHook).toEqual(testStart)
        done()
    })
    it('The start function  can throw error', function (done) {
        try {
            const scheduler = new Scheduler()
            scheduler.start(123)
            expect(false).toEqual(true)
        } catch (error) {
            expect(true).toEqual(true)
        }
        done()
    })
    it('The end function parameter is function', function (done) {
        const scheduler = new Scheduler()
        const test1 = scheduler.end(testEnd)
        expect(test1._hook.endHook).toEqual(testEnd)
        done()
    })
    it('The end function can throw error', function (done) {
        try {
            const scheduler = new Scheduler()
            scheduler.end(123)
            expect(false).toEqual(true)
        } catch (error) {
            expect(true).toEqual(true)
        }
        done()
    })
    it('The error function parameter is function', function (done) {
        const scheduler = new Scheduler()
        const test1 = scheduler.error(testError)
        expect(test1._hook.errorHook).toEqual(testError)
        done()
    })
    it('The error function can throw error', function (done) {
        try {
            const scheduler = new Scheduler()
            scheduler.error(123)
            expect(false).toEqual(true)
        } catch (error) {
            expect(true).toEqual(true)
        }
        done()
    })
})
describe('Different task methods', function () {
    function hello1() {
        return true
    }

    function hello2() {
        return true
    }

    function hello3() {
        return true
    }
    it('The task function parameter is defined ', function (done) {
        const scheduler = new Scheduler()
        const test1 = scheduler.task(hello1)
        expect(test1._taskList.has(hello1)).toEqual(true)
        done()
    })
    it('The task function can throw error ', function (done) {
        try {
            const scheduler = new Scheduler()
            scheduler.task(true)
            expect(false).toEqual(true)
        } catch (error) {
            expect(true).toEqual(true)
        }
        done()
    })
    it('The removeTask function can throw error ', function (done) {
        try {
            const scheduler = new Scheduler()
            scheduler.removeTask(hello1)
            scheduler.removeTask(hello2)
            scheduler.removeTask(hello3)
            expect(false).toEqual(true)
        } catch (error) {
            expect(true).toEqual(true)
        }
        done()
    })
    it('The removeAllTask function parameter is defined ', function (done) {
        const scheduler = new Scheduler()
        scheduler._taskList.set(hello1)
        scheduler.removeAllTask()
        expect(scheduler._taskList.size).toEqual(0)
        done()
    })
    it('The _execute function register two tasks ', function (done) {
        let num = 0
        const scheduler = new Scheduler()
        scheduler.task(function (data) {
            num += data
        })
        scheduler._execute(1)
        scheduler._execute(1)
        expect(num).toEqual(2)
        done()
    })
    it('The _execute function can throw error ', function (done) {
        let result
        const scheduler = new Scheduler()
        scheduler.task(function () {
            throw 'The _execute function can throw error'
        })
        scheduler.error(function (error) {
            result = error
        })
        scheduler._execute(null)
        expect(result).toEqual('The _execute function can throw error')
        done()
    })
})