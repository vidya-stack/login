var Users = require('../dao/user.dao');

exports.createUser = function (req, res, next) {
    var user = {
        email: req.body.email,
        password: req.body.password
    };

    Users.create(user, function(err, hero) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User created successfully"
        })
    })
}

exports.getUsers = function(req, res, next) {
    Users.get({}, function(err, users) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            users: users
        })
    })
}

exports.getUser = function(req, res, next) {
    Users.get({email: req.params.email}, function(err, users) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            users: users
        })
    })
}

exports.updateUser = function(req, res, next) {
    var user = {
        email: req.body.email,
        password: req.body.password
    }
    Users.update({_id: req.params.id}, hero, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User updated successfully"
        })
    })
}

exports.removeUser = function(req, res, next) {
    Users.delete({_id: req.params.id}, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User deleted successfully"
        })
    })
}