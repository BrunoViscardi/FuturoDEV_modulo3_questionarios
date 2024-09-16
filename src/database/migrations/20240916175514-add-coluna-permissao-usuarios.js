'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('usuarios', 'permissao', {
      type: Sequelize.STRING,
      allowNull: true, // Define se a coluna pode ter valores nulos
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'permissao')
  }
};
