import cloneDeep from 'clone-deep'

/**
 * Replication scheduler
 * 
 * @param {Object} scheduler 
 */
export default function(scheduler) {
    const attribute = cloneDeep({...scheduler})
    const newScheduler = new scheduler.constructor()
    
    // Pasting properties
    Object.keys(attribute).forEach(key => newScheduler[key] = attribute[key])
    return newScheduler
}