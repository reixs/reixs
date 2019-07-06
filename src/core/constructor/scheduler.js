import kindOf from 'kind-of'

/**
 * The underlying request model
 */
class Scheduler {
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
    _taskList = new Map()

    /**
     * Circular call task
     * @param {*} data 
     */
    _execute(data) {
        const {errorHook} = this._hook
        if (kindOf(data) !== undefined) {
            try {
                [...this._taskList.keys()].forEach(task =>{
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
        if (kindOf(settings) === 'number' || settings === false) {
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
        if (kindOf(settings) === 'number' || settings === false) {
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
        if (kindOf(settings) === 'number' || kindOf(settings) === 'boolean') {
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
        if (kindOf(time) === 'number' || time === null) {
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
        if (kindOf(task) === 'function') {
            this._taskList.set(task)
            return this
        } else {
            throw new Error('Invalid type')
        }
    }

    /**
     * Remove assigned task
     * 
     * @param {Function} task 
     */
    removeTask(task) {
        if (!this._taskList.delete(task)) {
            throw new Error('Remove task failed')
        }
    }

    /**
     * Remove all task
     */
    removeAllTask() {
        this._taskList.clear()
    }
    
    /**
     * Request to prepare
     * 
     * @param {Function} prepareHook 
     */
    prepare(prepareHook) {
        if (kindOf(prepareHook) === 'function') {
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
        if (kindOf(startHook) === 'function') {
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
        if (kindOf(endHook) === 'function') {
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
        if (kindOf(errorHook) === 'function') {
            this._hook.errorHook = errorHook
            return this
        } else {
            throw new Error('Invalid type')
        }
    }
}

// Scheduler is blocked from inheriting an Object
Object.setPrototypeOf(Scheduler.prototype, Object.create(null))

export default Scheduler