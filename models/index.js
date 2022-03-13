require('../config/db.connection');

module.exports = {
    Comment: require('./Comment'),
    Player: require('./Player'),
    Team: require('./Team'),
    User: require('./User'),
}