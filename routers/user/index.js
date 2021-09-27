const express = require("express");

const userController  = require("../../controllers/user/index.js");

const router = express.Router();

//-----------------------------------
//-----------------------------------

router.post(
  "/createUser",
  async (req, res, next) => {
    try {
      
      const token = req.get("x-access-token");
      const obj = req.body;

      const { data , status: statusCode } = await userController.userCreate(obj,token);

      // Respuesta al Front
      res.locals.responseSend = { message: "ok" , data };

      res.locals.responseCode = statusCode;

      // call the responseÂ´s log middleware
      next();
    } catch (e) {
      // call the Error middleware
      next(e.response ? e.response : e);
    }
  }
);

router.get(
  "/userList",
  async (req, res, next) => {
    try {
      
      const token = req.get("x-access-token");
      const accountId = req.query.accountId;

      const { data , status: statusCode } = await userController.userList(token, accountId);

      // Respuesta al Front
      res.locals.responseSend = { message: "ok" , data };

      res.locals.responseCode = statusCode;

      // call the responseÂ´s log middleware
      next();
    } catch (e) {
      // call the Error middleware
      next(e.response ? e.response : e);
    }
  }
);


module.exports.user = router;
