const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  imageUrl: String,
  plans: [{type: Schema.Types.ObjectId, ref: 'Plan' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;


