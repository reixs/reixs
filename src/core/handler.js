export default class {
    constructor(globalReqPipes, globalResPipes) {
        this.pipes = {
            ...this.pipes,
            globalReqPipes,
            globalResPipes
        }
    }

    config = {
        throttle: false,
        discard: false,
        debounce: 0,
        overtime: null
    }

    hook = {
        tartHook: null,
        endHook: null,
        errorHook: null
    }

    pipes = {
        globalReqPipes: [],
        globalResPipes: []
    }

    taskList =[]

    setThrottle(ifThrottle) {
        if (typeof time === 'boolean') {
            this.config.throttle = ifThrottle
        } else {
            throw new Error('Invalid type')
        }
        return this
    }

    setDiscard(ifDiscard) {
        if (typeof time === 'boolean') {
            this.config.discard = ifDiscard
        } else {
            throw new Error('Invalid type')
        }
        return this
    }

    setDebounce(time) {
        if (typeof time === 'number') {
            this.config.debounce = time
        } else {
            throw new Error('Invalid type')
        }
        return this
    }
    
    setOvertime(time) {
        if (typeof time === 'number' || time === null) {
            this.config.overtime = time
        } else {
            throw new Error('Invalid type')
        }
        return this
    }
    
    task(task) {
        this.taskList.push(task)
        return this
    }

    start(startHook) {
        this.hook.startHook = startHook
        return this
    }
    
    end(endHook) {
        this.hook.endHook = endHook
        return this
    }
    
    error(errorHook) {
        this.hook.errorHook = errorHook
        return this
    }
    
    execute(data) {
        const {errorHook} = this.hook
        if (data !== undefined) {
            try {
                this.taskList.forEach(task =>{
                    task(data)
                })
            } catch (error) {
                errorHook && errorHook(error)
            }
        }
    }
}

