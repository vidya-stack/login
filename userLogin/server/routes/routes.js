var user = require("../control/control");

module.exports = function(router){
    router.post("/register", user.createUser);
}