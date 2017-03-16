const UserController = require("../controllers/users");

module.exports = (app) => {
  app.post('/users', UserController.create);
  // app.post('/login', UserController.login);

};
