const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
    // find all categories
    try {
        const productData = await Location.findAll();
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
    // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    try {
        const productData = await Product.findByPk(req.params.id, {
            include: [{ model: Location, through: Trip, as: 'planned_trips' }]
        });

        if (!productData) {
            res.status(404).json({ message: 'No product found with this id!' });
            return;
        }

        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', (req, res) => {
    // create a new category
});

router.put('/:id', async(req, res) => {
    // update a category by its `id` value
    try {
        const productData = await Product.create(req.body);
        res.status(200).json(productData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async(req, res) => {
    // delete a category by its `id` value
    try {
        const productData = await product.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!productData) {
            res.status(404).json({ message: 'No traveller found with this id!' });
            return;
        }

        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;