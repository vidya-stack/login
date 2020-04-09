var mongoose = require("mongoose");
var a = require("../model/usermodel");


a.statics = {
    create: function(data,cb){
        var user = new this(data);
        user.save(cb);
    }
}


var userModel = mongoose.model('User', a);
module.exports = userModel;