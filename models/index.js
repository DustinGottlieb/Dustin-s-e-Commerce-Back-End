// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
    foregnKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
    foreignkey: 'product_id',
});

// Products belongsToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: {
        model: ProductTag,
        unique: false
    },
    as: 'tag_id'
});

// Tags belongsToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: {
        model: ProductTag,
        unique: false
    },
    as: 'product_id'
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};