'use strict';
module.exports = function(sequelize, DataTypes) {
  var comments = sequelize.define('comments', {
    comment: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    photo_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return comments;
};