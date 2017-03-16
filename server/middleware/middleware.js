const jwt = require("jwt-simple");
const appSecrets = require("../config/secret");
const User = require("../models").users;


//  http://localhost:8000/users/authenticate
module.exports = {
  authenticate (req, res, next) {
    // Look for a token.
    var token = req.headers['access-token'] || req.query.access_token;

    // If they didn't provide a token, send them away.
    if (!token) {
      res.status(401).send({
        message: "Must be authenticated to use this route."
      });
    }

    // Try to decode the token.
    try {
      var decoded = jwt.decode(token, appSecrets.jwtSecret);
      var userId = decoded.id;


      User.findById(id).then(user => {


        if (!user) {
          res.status(401).send({ message: "Error during authentication." });
        }

        req.user = user;
        next();
      });

    } catch (e) {
      console.log(e);
      // Token was garbage. Tell 'em so.
      res.status(401).send({ message: "Invalid token." });
    }

  }
};
