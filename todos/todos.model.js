const { model } = require('mongoose');
const { kategorieSchema } = require('./todos.schema');


const kategorieModel = model('kategorie', kategorieSchema);

module.exports = {
  kategorieModel,
}