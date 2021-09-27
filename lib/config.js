const convict = require("convict");

// Define a schema
const config = convict({
  port: {
    ini: 3000
  },
  json: {
    limit: "10mb"
  },
  DB: {
    nameDB: "test",
    url: ""
  }
});

module.exports = config;
