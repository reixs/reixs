import {Separate, All} from './core/constructor'

/**
 * Create reixs 
 * 
 * @param {string} url 
 * @param {string} method
 * @param {*} params  
 */
function createInstance(url, method, params) {
    return new Proxy(new Separate(url, method, params), {
        set() {
            throw new Error('Overwriting any attributes is not allowed')
        }
    })
}

/**
 * Set pipe 
 * 
 * @param {string} name 
 * @param  {...any} funList 
 */
function setPipes(name, ...funList) {
    funList.forEach(fn=>{
        if (typeof fn !== 'function') {
            throw new Error('Invalid type')
        }
    })
    Separate.global[name] = [...funList]
}

/**
 * Set Interceptor
 * 
 * @param {string} name 
 * @param {Function} fun 
 */
function setInterceptor(name, fun) {
    if (typeof fn === 'function') {
        Separate.global[name] = fun
    } else {
        throw new Error('Invalid type')
    }
}

export default new Proxy(createInstance, {
    get(target, property) {
        switch (property) {
        // Replaced by browserify-versionify transform
        case 'version':
            return '__VERSION__'
        // Set request and response pipe
        case 'reqPipes':
        case 'resPipes':
            return setPipes.bind(null, property)
        // Set request and response interceptor
        case 'beforeReq':
        case 'afterReq':
        case 'beforeRes':
        case 'afterRes':
            return setInterceptor.bind(null, property)
        case 'all':
            return (...scheduler) => new All(...scheduler)
        }
    },
    set(target, property, value) {
        switch (property) {
        case 'globalHeader':
        case 'globalParams':
            if (value.constructor === Object) {
                Separate.global[property] = value
            } else {
                throw new Error('Invalid type')
            }
        }
    }
})

