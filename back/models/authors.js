'use strict';
module.exports = (sequelize, DataTypes) => {
  var Authors = sequelize.define('Authors', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
  });

  Authors.associate = function(models) {
    models.Authors.belongsToMany(models.Books, { through: 'books_authors' })
  };

  return Authors;
};