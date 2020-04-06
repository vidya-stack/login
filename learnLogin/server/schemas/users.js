var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// const UserSchema = new Schema({
    
//     email:String,
//     password:String,
//     quote:{type:String, default:"uuuuuuuu"}
// });

var UserSchema = new Schema({
    email :{
          type: String,
          unique : false,
          required : false
    },
    password : {
          type: String,
          unique : false,
          required : false
    },quote:{type:String, default:"Hello World"}}, 
    {
          timestamps: true
});

//console.log("_______lll",UserSchema)
//const Usermo = mongoose.model('User',UserSchema)

// module.exports = Usermo;

module.exports = UserSchema;