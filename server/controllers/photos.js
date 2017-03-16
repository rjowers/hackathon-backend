const Photos = require("../models").photos;

module.exports = {
   create (req, res) {
    Photos.create({
      photos: req.body.photo,
      photo_url: req.body.photo_url,
      user_id: req.body.user_id,
      description: req.body.description,
      votes: req.body.votes

    })
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
   }
 };
