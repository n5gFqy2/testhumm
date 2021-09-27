
const axios = require('axios');

class LoginServices {
  constructor() {
    this.collection = "itemsCheck";
  }

  login(username,password) {
    return axios.post('https://hummingbird-staging.podgroup.com/auth/token', { username, password })
  }
}

module.exports = new LoginServices();