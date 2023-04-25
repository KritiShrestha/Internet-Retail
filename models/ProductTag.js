const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
// Create a new Sequelize model for ProductTag
class ProductTag extends Model {}

ProductTag.init(
  {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    
  },
  // Store a reference of the `id` of the `product` model
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'product',
      key: 'id',
  },
},
// Store a reference of the `id` of the `tag` model

  tag_id:{
    type: DataTypes.INTEGER,
    references: {
      model: 'tag',
      key: 'id',
  },
  },
},
 // Link to database connection
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }

);

module.exports = ProductTag;
