const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
// const bcrypt = require('bcrypt'); when ready activate

class Comment extends Model {}

    Comment.init(
    {
    id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
     },
    feedback:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id'
        }
    }
   },
   {
   sequelize,
   timestamps: true,
   freezeTableName: true,
   underscored: true,
   modelName: 'comment'
  }
);

module.exports = Comment;
