const express = require('express');
const { createProduct, getProduct, getAllProducts } = require('../controllers/productController');
const prouter = express.Router();


// Router for creating a single Product
prouter.post('/api/product',createProduct)

// Router for getting a specific product through id
prouter.get('/api/product/:id',getProduct)

// Router for getting all the products that are created
prouter.get('/api/product',getAllProducts)

module.exports = prouter;

