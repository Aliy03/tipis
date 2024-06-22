const { Schema } = require('mongoose');

const mestSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = {
  mestSchema,
}