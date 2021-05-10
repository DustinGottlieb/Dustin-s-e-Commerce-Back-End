const router = require('express').Router();
const { Category, Product, Category } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
    // find all categories
    try {
        const Category = await category.findAll();
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
    // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    try {
        const Category = await Category.findByPk(req.params.id, {
            include: [{ model: Products, through: ProductTag, as: 'product_tag' }]
        });

        if (!Category) {
            res.status(404).json({ message: 'No product found with this id!' });
            return;
        }

        res.status(200).json(Category);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async(req, res) => {
    // create a new category
    try {
        const Category = await Category.create(req.body);
        res.status(200).json(Category);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async(req, res) => {
    // update a category by its `id` value
    try {
        const Category = await Category.create(req.body);
        res.status(200).json(Category);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async(req, res) => {
    // delete a category by its `id` value
    try {
        const Category = await product.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!Category) {
            res.status(404).json({ message: 'No traveller found with this id!' });
            return;
        }

        res.status(200).json(Category);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;