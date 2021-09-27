const winston = require("./../lib/winston.js");

//-----------------------------------------
//-----------------------------------------

// middleware used to logging the errors and send the error response
const errorHandler = async (err, req, res, next) => {
  try {
    console.log('errorHandler ----------------')

    winston.error({
      error: err,
      stack: err.stack,
      headers: req.headers,
      body: req.body,
      baseUrl: req.baseUrl,
      hostname: req.hostname,
      method: req.method,
      originalUrl: req.originalUrl,
      params: req.params,
      path: req.path,
      query: req.query,
      route: req.route
      //,file: req.files
    });

    //**
    const code = err.status || 500;

    const message = err.message
      ? err.message
      : ( err.data ? err.data : "Error no Servidor tenta novamente");
      
    res.status(code).send(message);
  } catch (e) {
    console.error(e);
  }
};

module.exports.errorHandler = errorHandler;
