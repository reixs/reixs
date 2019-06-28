import {Reixs, ReixsAll, ReixsRace} from './core/constructor'

import isPlainObject from 'is-plain-object'

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
 * reixs method
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
// reixs.race
reixs.race = (...scheduler) => new ReixsRace(...scheduler)

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
        if (isPlainObject(value)) {
            Reixs.global.globalHeader = value
        } else {
            throw new Error('The argument passed in must be a literal object')
        }
    }
})

// Set global params
Reflect.defineProperty(reixs, 'globalParams', {
    set(value) {
        if (isPlainObject(value)) {
            Reixs.global.globalParams = value
        } else {
            throw new Error('The argument passed in must be a literal object')
        }
    }
})

export default reixs


