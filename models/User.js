const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
  async checkPassword(loginPw) {
    return await bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
    {
     id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
     },
     username: {
         type: DataTypes.STRING,
         allowNull: false
     },
     password: {
         type:DataTypes.STRING,
         allowNull:false,
         validate: {
             len:[4]}
      }
   },
   {hooks: {
       // hook: this is where bcrypt will go for new and updated users beforeCreate, beforeUpdate
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },

      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
   sequelize,
   timestamps: true,
   freezeTableName: true,
   underscored: true,
   modelName: 'user'
  }
);

module.exports = User;
