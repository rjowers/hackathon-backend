const UserController = require("../controllers/users");
const PhotosController = require("../controllers/photos");
const CommentsController = require("../controllers/comments")
const Middleware = require('../middleware/middleware');

module.exports = (app) => {
  app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-token");
   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS")
   next();
 });
  app.post('/users', UserController.create);
  app.post('/login', UserController.login);
  app.get('/users', UserController.findAll);
  app.delete('/users/:userid', UserController.delete);
  app.get('/user/:userid/photos', UserController.findOne);
  app.put('/update/:userid', UserController.update);

  app.post('/photos', Middleware.authenticate, PhotosController.create);
  // app.post('/photos', Middleware.authenticate, PhotosController.create);
  app.get('/photos', PhotosController.findAll);
  app.delete('/photos/:photoid', PhotosController.delete);
  // app.get('/photos/:photoid/comments/', PhotosController.findComments);
  app.get('/photo/:photoid/', Middleware.authenticate, PhotosController.findOne);





  app.post('/comments/:photoid', Middleware.authenticate, CommentsController.create);
  app.get('/comments', CommentsController.findAll);
  app.delete('/comments/:commentid', CommentsController.delete);



};
