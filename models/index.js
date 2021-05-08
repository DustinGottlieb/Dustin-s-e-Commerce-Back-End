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
Category.BelongsToMany(Products, {
    through: {
        model: Tag,
        unique: false
    },
    as: 'product_category'
});

// Products belongToMany Tags (through ProductTag)
Product.BelongsToMany(Tag, {
    through: {
        model: ProductTag,
        unique: false
    },
    as: ProductTag
});

// Tags belongToMany Products (through ProductTag)
Tag.BelongsToMany(Product, {
    through: {
        model: ProductTag,
        unique: false
    },
    as: ProductTag
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};