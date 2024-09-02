const store = require('../../../store/dummy');

const TABLE = 'user';

module.exports = function(injectedStore) {

    let store = injectedStore;

    if(!store) {
        store = require('../../../store/dummy');
    }    
    function list() {
        return store.list(TABLE)
      }

    return {
        list,
    };
}
