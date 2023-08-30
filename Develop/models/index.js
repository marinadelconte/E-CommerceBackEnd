const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 
  
});

Category.hasMany(Product, {
  foreignKey: 
});

Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  });

Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ,
    unique: false
  },
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
