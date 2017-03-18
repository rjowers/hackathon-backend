const Photos = require("../models").photos;
const Comments = require('../models').comments;
const Users = require('../models').users;


module.exports = {
   create (req, res) {
    Photos.create({
      photo_url: req.body.photo_url,
      user_id: req.user.id,
      description: req.body.description,
      votes: req.body.votes

    })
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
   },

   findAll (req, res) {
     Photos.findAll({
       model: Users, attributes : ['username']
     })
      .then(photos=> res.status(201).send(photos))
      .catch(error => res.status(400).send(error));
    },

  delete(req, res){
    Photos.destroy({
           where: {
                  id:req.params.photoid
                }
            })
    .then((photos) => res.status(200).send(photos))
    .catch((error) => res.status(400).send(error));
},

findOne (req,res) {
  console.log('hello');
  Photos.findById(req.params.photoid, {
    include: [
      { model: Users, attributes: ['username'] },
      { model: Comments }
    ]
  })
  .then((users) => res.status(200).send(users))
  .catch((error) => res.status(400).send(error));
},





 };
