
const axios = require('axios');

class userServices {
  constructor() {
  }

  userCreate(obj,token) {
    return axios.post('https://hummingbird-staging.podgroup.com/users', obj ,{ headers: {'x-access-token': token}})
  }

  userList(token, accountId) {
    return axios.get('https://hummingbird-staging.podgroup.com/users', { params : { accountId: accountId } , headers: {'x-access-token': token }})
  }
}

module.exports = new userServices();