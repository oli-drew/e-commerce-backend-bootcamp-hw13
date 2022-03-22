// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Categories.hasMany(Products, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tags, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "product_tags",
});

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "tagged_products",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
