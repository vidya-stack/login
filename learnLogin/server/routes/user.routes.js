var User = require('../controller/user.controller');

module.exports = function(router) {
    router.post('/register', User.createUser);
    router.get('/get', User.getUsers);
    router.get('/get/:name', User.getUser);
    router.put('/update/:id', User.updateUser);
    router.delete('/remove/:id', User.removeUser);
}