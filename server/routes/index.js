const UserController = require("../controllers/users");
const PhotosController = require("../controllers/photos");
const CommentsController = require("../controllers/comments")
const Middleware = require('../middleware/middleware');

module.exports = (app) => {
  app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-token");
   next();
 });
  app.post('/users', UserController.create);
  app.post('/login', UserController.login);
  app.get('/users', UserController.findAll)

  app.post('/photos', Middleware.authenticate, PhotosController.create);
  app.get('/photos', PhotosController.findAll);

  app.post('/comments/:photoid', Middleware.authenticate, CommentsController.create);
  app.get('/comments', CommentsController.findAll);
};
