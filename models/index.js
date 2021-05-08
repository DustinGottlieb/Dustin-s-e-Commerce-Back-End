// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
    foregnKey: 'product_id',
    onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
    foreignkey: 'category_id',
    onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.BelongsToMany(Tag, {
    through: {
        model: ProductTag,
        unique: false
    },
    as: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.BelongsToMany(Product, {
    through: {
        model: ProductTag,
        unique: false
    },
    as: 'tag_id'
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};