const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  location: String,
  plans: [{type: Schema.Types.ObjectId, ref: 'Plans' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;


