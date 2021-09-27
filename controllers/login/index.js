const LoginServices = require("../../services/login");

class LoginController {
  login(username,password) {
    return LoginServices.login(username,password);
  }
}

module.exports = new LoginController();