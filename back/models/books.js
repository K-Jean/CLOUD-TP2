'use strict';
module.exports = (sequelize, DataTypes) => {
  var Books = sequelize.define('Books', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  });

  Books.associate = function(models) {
    models.Books.belongsToMany(models.Authors, { through: 'books_authors' })
  };

  return Books;
};