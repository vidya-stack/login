// var express = require('express');
// var path = require("path");
// var bodyParser = require('body-parser');
// var mongo = require("mongoose");
// var app = express();
// var MongoClient = require('mongodb').MongoClient;
// var Schema = mongo.Schema;

// var dbURL = "mongodb://localhost:27017/rnd";
// var db = MongoClient.connect(dbURL,function(err,response){
//     if(err){"error===>",console.log(err);}
//     else{
//         // console.log("conencted to"+db, "+", response)
//         console.log("conencted to"+db)

//     }
// })




// var app = express();
// app.use(bodyParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

// app.use(function(req, res, next){
//     res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials',true);
//     next();
// })


// var UserSchema = new Schema({
//     name:{type:String},
//     address:{type:String},
// },{
//     versionKey:false
// });


// var model = mongo.model('users',UserSchema);

// app.post("/api/registerUser",function(req,res){
//     var mod = new model(req.body);
//     if(req.body.mode == "Save"){
//         mod.save(function(err,data){
//             if(err){
//                 res.send(err);
//             }else{
//                 res.send({data:"Record has been inserted.. !!"})
//             }
//         })
//     }else{
//         model.findByIdAndUpdate(res.body.id,{name:req.body.name, address:req.body.address},
//             function(){
//                 if(err){
//                     res.send(err);
//                 }else{
//                     res.send({data:"Record has been updated.. !!"})
//                 }
//             })
//     }
// })


// app.post("/api/deleteUser",function(req,res){
//     model.remove({_id:req.body.id},function(){
//         if(err){
//             res.send(err);
//         }else{
//             res.send({data:"Record has been deleted.. !!"})
//         }
//     })
// })


// app.get("/api/getUser",function(){
//     model.find({},function(err,data){
//         if(err){
//             res.send(err);
//         }else{
//             res.send(data);
//         }
//     })
// })

// app.listen(3000,function(){
//     console.log("app is listening on port 3000")
// })

// // -------------------------------*********************************

// // var Users = require('../src/app/auth-service.service');
// // app.use(bodyParser.urlencoded({ extended: false }))
// // app.use(bodyParser.json())
// // var port = 3000


// // app.post('/api/registerUser', (req, res) => {
// //     con
// //     res.json({
// //         data: req.body
// //     })
// // })

// // app.listen(port, (req, res) => {
// //     console.log(`Server listening on port ${port}!`)
// //     console.log("REQQQQQQ",req);
// //     console.log("ressponseee",res)

// // })



const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');
const url = 'mongodb://localhost/fff';
var db = require("./mongodb/database");
const User = require("./model/usermodel");
var usersRoutes = require('./routes/routes');
var router = express.Router();
db();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.use(cors());
app.use(function(req, res, next){
    
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    // res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    res.setHeader('Access-Control-Allow-Credentials',true);
    
    next();
})


app.use('/api',router);
usersRoutes(router);




// app.post('/api/user/login', (req, res) => {
//     mongoose.connect(url, function(err){
//         if(err) throw err;
//         console.log('connected successfully, username is ',req.body.username,' password is ',req.body.password);
//     });
// })

// app.get('/api/user/login', (req, res) => {
//     res.send('Hello World!')
// })
 

// app.post('/api/user/login', (req, res) => {
//     mongoose.connect(url,{ 
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//      } , function(err){
//         if(err) throw err;
//         User.find({
//             username : req.body.username, password : req.body.password, email:req.body.email
//         }, function(err, user){
//             if(err) throw err;
//             if(user.length === 1){  
//                 return res.status(200).json({
//                     status: 'success',
//                     data: user
//                 })
//             } else {
//                 return res.status(200).json({
//                     status: 'fail',
//                     message: 'Login Failed'
//                 })
//             }
             
//         })
//     });
// })

app.listen(3000, () => console.log('blog server running on port 3000!'))