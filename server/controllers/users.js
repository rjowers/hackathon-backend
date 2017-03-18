const Users = require("../models").users;
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const appSecrets = require ('../config/secret');
const Photos = require("../models").photos;
const Comments = require('../models').comments;

module.exports = {
   create (req, res) {
     var salt = bcrypt.genSaltSync(10);
    var hashedPass = bcrypt.hashSync(req.body.password, salt);
    Users.create({
      username: req.body.username,
      password: hashedPass,
      email: req.body.email,
      salt: salt

    })
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
   },

   login (req, res) {
        Users.findOne({
          where: {
            email: req.body.email
          }
        })
          .then(user => {
            if (!user) {
              return res.status(401).send({ message: "No such email or wrong password." });
            }

            //console.log(user.salt);
            var input = bcrypt.hashSync(req.body.password, user.salt);
            //console.log(`hashed input: ${input}, stored password: ${user.password}`);
            if (input === user.password) {
              //console.log('hello from inside input')
              var token = jwt.encode({ id: user.id, username: user.username }, appSecrets.secret);
              //console.log(token)

              var json = {
              user: user,
              token: token
              };
              return res.status(200).send(json);
            } else {
              return res.status(401).send({ message: "No such email or wrong password." });
            }
          })
          .catch(error => res.status(400).send(error));
     },

     findAll (req, res) {
       Users.findAll()
         .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error));
      },

  delete(req, res){
    Users.destroy({
         where: {
                id:req.params.userid
              }
          })
  .then((users) => res.status(200).send(users))
  .catch((error) => res.status(400).send(error));
},

findOne (req,res) {
  console.log('hello');
  Users.findById(req.params.userid, {
    include: {
      model: Photos
    }

  })
  .then((users) => res.status(200).send(users))
  .catch((error) => res.status(400).send(error));
}
};

// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJSeWFuIn0.FPo-oRS_8slFiWjhOUY84y4C-NfHYau5Yi-SC3vPijQ
