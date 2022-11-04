'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('postsTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postId: {
        type: Sequelize.INTEGER
      },
      tagId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('postsTags');
  }
};


// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     await queryInterface.changeColumn('postsTags', 'postId', {
//       type: Sequelize.INTEGER,
//       references: {
//         model: 'posts',
//         key: 'id'
//       },
//       onDelete: 'CASCADE'
//     });

//     await queryInterface.changeColumn('postsTags', 'tagId', {
//       type: Sequelize.INTEGER,
//       references: {
//         model: 'tags',
//         key: 'id'
//       },
//       onDelete: 'CASCADE'
//     });
//   },

//   async down (queryInterface, Sequelize) {
//     await queryInterface.changeColumn('postsTags', 'postId', {
//       type: Sequelize.INTEGER
//     });

//     await queryInterface.changeColumn('postsTags', 'tagId', {
//       type: Sequelize.INTEGER
//     });
//   }
// };