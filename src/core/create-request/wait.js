/**
 * Create wait object
 */
class Wait {
    _p = null

    /**
     * Create internal promise
     * @param {number} time 
     */
    _createPromise(time) {
        return time ? new Promise(resolve=>{
            setTimeout(()=>{ 
                this._p = null
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
        if (this._p) {
            return new Promise(()=>{})
        }
        this._p = this._createPromise(time)
        return this._p
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
        if (this._p) {
            this._p.cancel()
        }
        this._p = this._createPromise(time)
        return this._p
    }
}