var utils = require('./utils');

module.exports = {
    testAdd: function(test) {
        test.equals(utils.add(1, 2), 3); 
        test.done();
    }
};