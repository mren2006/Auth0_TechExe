const faker = require('faker');
const _ = require('lodash');

exports.users = function() {
    return _.times(100, function(n) {
            return {
                id: n,
                user_id: faker.internet.email(),
                
            }
        })
}