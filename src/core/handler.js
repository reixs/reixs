export default class {
    // Request trigger rule configuration
    _config = {
        throttle: false,
        discard: false,
        debounce: 0,
        overtime: null
    }

    // Life cycle function
    _hook = {
        tartHook: null,
        endHook: null,
        errorHook: null
    }

    // Data filtering
    _pipes = {
        globalReqPipes: [],
        globalResPipes: []
    }

    // Task queue executed after the request is completed
    _taskList =[]

    /**
     * Circular call task
     * @param {*} data 
     */
    _execute(data) {
        const {errorHook} = this._hook
        if (data !== undefined) {
            try {
                this._taskList.forEach(task =>{
                    task(data)
                })
            } catch (error) {
                errorHook && errorHook(error)
            }
        }
    }

    /**
     * Set throttle
     * 
     * @param {boolean} ifThrottle 
     */
    setThrottle(ifThrottle) {
        if (typeof time === 'boolean') {
            this._config.throttle = ifThrottle
        } else {
            throw new Error('Invalid type')
        }
        return this
    }

    /**
     * Set discard
     * 
     * @param {boolean} ifDiscard 
     */
    setDiscard(ifDiscard) {
        if (typeof time === 'boolean') {
            this._config.discard = ifDiscard
        } else {
            throw new Error('Invalid type')
        }
        return this
    }

    /**
     * Set debounce
     * 
     * @param {number} time 
     */
    setDebounce(time) {
        if (typeof time === 'number') {
            this._config.debounce = time
        } else {
            throw new Error('Invalid type')
        }
        return this
    }
    
    /**
     * Set overtime
     * 
     * @param {nummber|null} time 
     */
    setOvertime(time) {
        if (typeof time === 'number' || time === null) {
            this._config.overtime = time
        } else {
            throw new Error('Invalid type')
        }
        return this
    }
    
    /**
     * Add task
     * 
     * @param {Function} task 
     */
    task(task) {
        if (typeof task === 'function') {
            this._taskList.push(task)
            return this
        } else {
            throw new Error('Invalid type')
        }
    }

    /**
     * Request to start
     * 
     * @param {Function} startHook 
     */
    start(startHook) {
        if (typeof startHook === 'function') {
            this._hook.startHook = startHook
            return this
        } else {
            throw new Error('Invalid type')
        }
    }
    
    /**
     * Request to end
     * 
     * @param {Function} endHook 
     */
    end(endHook) {
        if (typeof endHook === 'function') {
            this._hook.endHook = endHook
            return this
        } else {
            throw new Error('Invalid type')
        }
    }
    
    /**
     * Request to error
     * 
     * @param {Function} errorHook 
     */
    error(errorHook) {
        if (typeof errorHook === 'function') {
            this._hook.errorHook = errorHook
            return this
        } else {
            throw new Error('Invalid type')
        }
    }
}

