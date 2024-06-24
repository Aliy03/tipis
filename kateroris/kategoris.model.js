const { model } = require('mongoose');
const { kategorieSchema } = require('./kategoris.schema');


const kategorieModel = model('kategorie', kategorieSchema);

module.exports = {
  kategorieModel,
}