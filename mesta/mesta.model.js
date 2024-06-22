const { model } = require('mongoose');
const { mestSchema } = require('./mesta.schema');


const mestModel = model('mest', mestSchema);

module.exports = {
  mestModel,
}