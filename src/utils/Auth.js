var jwt = require("jsonwebtoken");

const auth = async (req, res,next) => {
    try {
      var token = req.headers.token
      if (!token) {
        let responseData = {
            message: "token not found",
          };
          res.status(400).json(responseData);
          return;
      }
      var decoded = await jwt.verify(token, process.env.PRIVATEKEY);
      console.log("decoded",decoded, );
      if (!decoded) {
          let result = {
            message: "user is not authenticated",
          };
          res.status(401).json(result);
          return;
        }
      next()
    } catch (error) {
        console.log("error",error);
      let responseData = {
        message: error,
      };
      res.status(404).json(responseData);
    }
  };
  

  module.exports = {
    auth
  };