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
        photos.hasMany(models.comments, {foreignKey: 'photo_id'});
        photos.belongsTo(models.users, {foreignKey: 'user_id'})
      }
    }
  });
  return photos;
};
