/**
 * The underlying request model
 */
export default class {
    // Request trigger rule configuration
    _config = {
        throttle: false,
        debounce: 0,
        audit: false,
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
        reqPipes: [],
        resPipes: []
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
     * Set the request filter pipeline
     * 
     * @param  {...any} pipes 
     */
    reqPipes(...pipes) {
        if (pipes.find(pipe =>typeof pipe !== 'function')) {
            throw new Error('Pipe must be a function')
        } else {
            this._pipes.reqPipes = [...pipes]
        }
        return this
    }

    /**
     * Set the response filter pipeline
     * 
     * @param  {...any} pipes 
     */
    resPipes(...pipes) {
        if (pipes.find(pipe =>typeof pipe !== 'function')) {
            throw new Error('Pipe must be a function')
        } else {
            this._pipes.resPipes = [...pipes]
        }
        return this
    }

    /**
     * Set throttle
     * 
     * @param {number|boolean} settings 
     */
    throttle(settings) {
        if (typeof time === 'number' || typeof time === 'boolean') {
            this._config.throttle = settings
        } else {
            throw new Error('Invalid type')
        }
        return this
    }

    /**
     * Set debounce
     * 
     * @param {number|boolean} settings 
     */
    debounce(settings) {
        if (typeof settings === 'number' || typeof settings === 'boolean') {
            this._config.debounce = settings
        } else {
            throw new Error('Invalid type')
        }
        return this
    }
    
    /**
     * Set audit
     * 
     * @param {number|boolean} settings 
     */
    audit(settings) {
        if (typeof settings === 'number' || typeof settings === 'boolean') {
            this._config.audit = settings
        } else {
            throw new Error('Invalid type')
        }
        return this
    }
    
    /**
     * Set overtime
     * 
     * @param {number|null} time 
     */
    overtime(time) {
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

