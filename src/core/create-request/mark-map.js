/**
 * Verify that mark is deprecated
 */
export default class {
    _map = []

    /**
     * Get mark
     * @param {number|boolean} audit 
     */
    get(audit) {
        const {_map} = this
        if (audit) {
            const sym = Symbol()
            const time = Date.now()
            let sign
            if (!_map.length 
                || (time - _map[_map.length - 1].time > audit 
                    && audit !== true)
            ) {
                sign = {
                    sym, 
                    time
                }
                _map.push(sign)
            } else {
                sign = _map[_map.length - 1]
                sign.sym = sym
                sign.time = time
            }

            return {
                sign,
                sym: sign.sym
            }
        }
        return null
    }

    /**
     * Verify the mark
     * @param {Object} mark 
     */
    test(mark) {
        if (mark && mark.sym !== mark.sign.sym) {
            return false
        } 

        if (mark) {
            const {_map} = this
            const index = _map.indexOf(mark.sign)
            _map.splice(index, 1)
        }
        return true
    }
}