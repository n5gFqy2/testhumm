const UserServices = require("../../services/user");

class userController {
  userCreate(obj,token) {
    return UserServices.userCreate(obj,token);
  }

  userList(token, accountId) {
    console.log(token, accountId);
    return UserServices.userList(token, accountId);
  }

}

module.exports = new userController();