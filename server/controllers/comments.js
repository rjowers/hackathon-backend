const Comments = require("../models").comments;


module.exports = {
   create (req, res) {
    Comments.create({
      comment: req.body.comment,
      user_id: req.user.id,
      photo_id: req.params.photoid,

    })
      .then(comments => res.status(201).send(comments))
      .catch(error => res.status(400).send(error));
   },

   findAll (req, res) {
     Comments.findAll()
       .then(comments=> res.status(201).send(comments))
      .catch(error => res.status(400).send(error));
    },


  delete(req, res){
  Comments.destroy({
         where: {
                id:req.params.commentid
              }
          })
  .then((comments) => res.status(200).send(comments))
  .catch((error) => res.status(400).send(error));
}

 };
