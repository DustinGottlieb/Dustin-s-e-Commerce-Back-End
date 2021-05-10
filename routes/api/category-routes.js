const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
    // find all categories
    try {
        const categories = await categories.findAll();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err);
    }
    // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    try {
        const categories = await Product.findByPk(req.params.id, {
            include: [{ model: Product, through: Category, as: 'Product_id' }]
        });

        if (!categories) {
            res.status(404).json({ message: 'No product found with this id!' });
            return;
        }

        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async(req, res) => {
    // create a new category
    try {
        const categories = await categories.create(req.body);
        res.status(200).json(categories);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async(req, res) => {
    // update a category by its `id` value
    try {
        const categories = await Product.create(req.body);
        res.status(200).json(categories);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async(req, res) => {
    // delete a category by its `id` value
    try {
        const categories = await product.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!categories) {
            res.status(404).json({ message: 'No category found with this id!' });
            return;
        }

        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;