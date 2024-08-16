const typesData = require('./types');
const { Type } = require('../models');

module.exports.createTestData = () => {
    Type.create(typesData)
        .then(data => {
            console.log(`successfully created ${data.length} items!`);
        })
        .catch(err => {
            console.log(`Creation error: ${err}`);
        });
}

module.exports.clearAllData = () => {
    Type.deleteMany()
        .then(data => {
            console.log(`deleted ${data.deletedCount}`);
        })
        .catch(err => {
            console.log(`Delete error: ${err}`);
        });
}