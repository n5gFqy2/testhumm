const express = require("express");

const LoginController  = require("../../controllers/login/index.js");

const router = express.Router();

//-----------------------------------
//-----------------------------------

router.post(
  "/login",
  async (req, res, next) => {
    try {
      
      const { username, password } = req.body;

      const { data: { token, status, _id } , status: statusCode } = await LoginController.login(username,password);

      // Respuesta al Front
      res.locals.responseSend = { message: "ok" , data : { token, status, _id } };

      res.locals.responseCode = statusCode;

      // call the responseÂ´s log middleware
      next();
    } catch (e) {
      // call the Error middleware
      next(e.response ? e.response : e);
    }
  }
);


module.exports.login = router;
