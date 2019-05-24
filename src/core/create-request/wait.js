/**
 * Create wait object
 */
class Wait {
    _timer = null

    /**
     * Create internal promise
     * @param {number} time 
     */
    _createPromise(time) {
        return time ? new Promise(resolve=>{
            this._timer =  setTimeout(()=>{ 
                this._timer = null
                resolve() 
            }, time)
        }) : Promise.resolve()
    }
}

/**
 * Create debounce wait object
 */
export class ThrottleWait extends Wait {
    constructor() {
        super()
    }

    /**
     * get await promise
     * @param {number} time 
     */
    get(time) {
        if (this._timer) {
            return new Promise(()=>{})
        }
        return this._createPromise(time)
    }
}

/**
 * Create debounce wait object
 */
export class DebounceWait extends Wait {
    constructor() {
        super()
    }

    /**
     * get await promise
     * @param {number} time 
     */
    get(time) {
        if (this._timer) {
            clearTimeout(this._timer)
            this._timer = null
        }
        return this._createPromise(time)
    }
}