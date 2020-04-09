const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String,   unique : false },
    password: { type: String,   unique : false},
    email: { type: String,   unique : false },

  }, { collection : 'apple' });
// });


//   ______________old_______________
//   const User = mongoose.model('User', userSchema);
//   module.exports = User;
//   ______________old_______________



// r = mongoose.model('User', userSchema); //commented

  module.exports = userSchema;