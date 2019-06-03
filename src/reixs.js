import {Reixs, ReixsAll} from './core/constructor'

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
    Reixs.global[name] = [...funList]
}

/**
 * Set Interceptor
 * 
 * @param {string} name 
 * @param {Function} fun 
 */
function setInterceptor(name, fun) {
    if (typeof fn === 'function') {
        Reixs.global[name] = fun
    } else {
        throw new Error('Invalid type')
    }
}

/**
 * 
 * @param {string} url 
 * @param {string} method 
 * @param {*} params 
 */
function reixs(url, method, params) {
    return  new Reixs(url, method, params)
}

// reixs.all
reixs.all = (...scheduler) => new ReixsAll(...scheduler)


// Replaced by browserify-versionify transform
reixs.version = '__VERSION__'

// Set request and response pipe
reixs.reqPipes = setPipes.bind(null, 'reqPipes')
reixs.resPipes = setPipes.bind(null, 'resPipes')

// Set request and response interceptor
reixs.beforeReq = setInterceptor.bind(null, 'beforeReq')
reixs.afterReq = setInterceptor.bind(null, 'afterReq')
reixs.beforeRes = setInterceptor.bind(null, 'beforeRes')
reixs.afterRes = setInterceptor.bind(null, 'afterRes')

// Set global header
Reflect.defineProperty(reixs, 'globalHeader', {
    set(value) {
        Reixs.global.globalHeader = value
    }
})

// Set global params
Reflect.defineProperty(reixs, 'globalParams', {
    set(value) {
        Reixs.global.globalParams = value
    }
})

export default reixs


