const UserController = require("../controllers/users");

module.exports = (app) => {
  app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });
  app.post('/users', UserController.create);
  // app.post('/login', UserController.login);

};
