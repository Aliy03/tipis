const { model } = require('mongoose');
const { torgovcentrSchema } = require('./torgovcentr.schema');


const torgovcentrModel = model('torgovcentr', torgovcentrSchema);

module.exports = {
    torgovcentrModel,
}