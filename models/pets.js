'use strict';
module.exports = function(sequelize, DataTypes) {
  var pets = sequelize.define('pets', {
    type: DataTypes.STRING,
    breed: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    img_url: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return pets;
};