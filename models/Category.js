//Imports Model and datatypes
const { Model, DataTypes } = require('sequelize');

//Imports connection.js to connect to database
const sequelize = require('../config/connection.js');

// Create a new Sequelize model for class called Category
class Category extends Model { }

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  },
  
);



module.exports = Category;
