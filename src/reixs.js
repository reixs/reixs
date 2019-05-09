import SeparateHandler from './core/separate-handler'

/**
 * Create reixs 
 * 
 * @param {string} url 
 * @param {string} method
 * @param {*} params  
 */
function createInstance(url, method, params) {
    return new Proxy(new SeparateHandler(url, method, params), {
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
    SeparateHandler.globalPipes[name] = [...funList]
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
        SeparateHandler.global[property] = value
    }
})


