const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

//create the model
const ModelClass = mongoose.model('user', userSchema);

//export the model
module.exports = ModelClass;
