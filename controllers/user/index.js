const UserServices = require("../../services/user");

class userController {
  userCreate(obj,token) {
    return UserServices.userCreate(obj,token);
  }
}

module.exports = new userController();