const product = require('../models/productSchema');

const asyncHandler = require('express-async-handler');


const createProduct = asyncHandler(async(req,res)=>{
try {
    const newestProduct = await  product.create(req.body);
    res.json(newestProduct);
} catch (error) {
    throw new Error(error)
}
});

// Controller for getting a single product through id

const getProduct = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    try {
        const findProduct = await product.findById(id);
        res.json(findProduct);
    } catch (error) {
    throw new Error(error)
    }
});


// Controller for getting all the products

const getAllProducts = asyncHandler(async(req,res)=>{
    const {allids} = req.params;
    try {
        const findAllProducts = await product.find(allids);
        res.json(findAllProducts);
    } catch (error) {
    throw new Error(error);
    }
})

module.exports = {createProduct,getProduct,getAllProducts};

