'use strict';
module.exports = (sequelize, DataTypes) => {
  var token = sequelize.define('token', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    role: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return token;
};