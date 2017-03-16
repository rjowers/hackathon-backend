'use strict';
module.exports = function(sequelize, DataTypes) {
  var photos = sequelize.define('photos', {
    photo_url: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    votes: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return photos;
};
