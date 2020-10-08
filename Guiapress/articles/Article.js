const Sequelize = require("sequelize");
const connection = require("../database/database");
// Relacionamento
const Category = require("../categories/Category");

const Article = connection.define("articles", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Category.hasMany(Article); // Uma Categoria tem muitos artigo 1 p M
Article.belongsTo(Category); // Um Artigo pertence a uma categoria 1 p 1

//Article.sync({force: true}) //essa linha cria uma nova tabela no bd

module.exports = Article;
