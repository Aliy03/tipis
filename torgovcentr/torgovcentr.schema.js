const { Schema } = require('mongoose');

const torgovcentrSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = {
    torgovcentrSchema,
}