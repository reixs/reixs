
// Scheduler is blocked from inheriting an Object
function noProto() {}
Object.setPrototypeOf(noProto.prototype, Object.create(null))

/**
 * The underlying request model
 */
export default class extends noProto {
    // Request trigger rule configuration
    _config = {
        throttle: false,
        debounce: 0,
        audit: false,
        overtime: null
    }

    // Life cycle function
    _hook = {
        prepareHook: null,
        tartHook: null,
        endHook: null,
        errorHook: null
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
     * @param {number|boolean} settings 
     */
    throttle(settings) {
        if (typeof settings === 'number' || settings === false) {
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
        if (typeof settings === 'number' || settings === false) {
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
     * Request to prepare
     * 
     * @param {Function} prepareHook 
     */
    prepare(prepareHook) {
        if (typeof prepareHook === 'function') {
            this._hook.prepareHook = prepareHook
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

