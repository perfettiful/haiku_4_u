const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Haiku extends Model {}

Haiku.init(
  {
  haiku_title: DataTypes.STRING,
  haiku_lineA: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  haiku_lineB: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  haiku_lineC: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  haiku_author: DataTypes.STRING,
  haiku_category: DataTypes.STRING,
},
  {
    sequelize
  }
);

module.exports = Comment;

