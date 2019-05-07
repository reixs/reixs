import SeparateHandler from './core/separate-handler'

// Multiple requests Shared
const global = {
    globalHeader: {},
    globalParams: {}
}

// Processing parameters
const globalPipes = {
    reqPipes: [],
    resPipes: []
}

/**
 * Create reixs 
 * 
 * @param {string} url 
 * @param {string} method
 * @param {*} params  
 */
function createInstance(url, method, params) {
    return new SeparateHandler(global, globalPipes, url, method, params)
}

/**
 * Set pipe 
 * 
 * @param {string} name 
 * @param  {...any} funList 
 */
function setPipes(name, ...funList) {
    globalPipes[name] = [...funList]
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
        }
    },
    set(target, property, value) {
        // Must be set to Object
        if (Reflect.has(global, property) 
            && value.constructor === Object) {
            global[property] = value
        } else {
            throw new Error('Invalid Settings')
        }
    }
})


