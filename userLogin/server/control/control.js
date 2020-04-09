var users = require("../userDatabaseCreation/userDatabase");

exports.createUser = function(req, res, next){
console.log("TTTTTT")
    var user = {
        name:req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    console.log("reqqqqqqq",user)
    const render = res.render;
    const send = res.send;
    res.render = function renderWrapper(...args) {
        Error.captureStackTrace(this);
        return render.apply(this, args);
    };
    res.send = function sendWrapper(...args) {
        try {
            send.apply(this, args);
        } catch (err) {
            console.error(`Error in res.send | ${err.code} | ${err.message} | ${res.stack}`);
        }
    };
    next();
   
    

    if (!req.body.name) {
        return res.status(400).json({
          status: 'error',
          error: 'req body cannot be empty',
        });
      }
    
      res.status(200).json({
        status: 'succes',
        data: req.body,
      })


    users.create(user, function(err, hero,res) {
        console.log("CRRRRRR")
        console.log("ERRRRR",err)
        if(err) {
            res.json({
                error :  err
            })
        }else{
           
        }
        res.json({
            message : "User created successfully"
        })
        if(hero){
            console.log("UUUUUU",hero)
        }
    })
}
