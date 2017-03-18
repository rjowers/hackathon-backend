'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {


      return queryInterface.addColumn('users', 'profilephoto', Sequelize.STRING);

  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.removeColumn('users', 'profilephoto');

  }
};
