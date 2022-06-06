const express = require("express");

const Product = require("../model/food.model");

const router = express.Router();



router.get("", async(req, res) => {
    try{
        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 5;

        const skip = (page - 1) * pagesize;

        const products = await Product.find()
        .skip(skip)
        .limit(pagesize)
        .lean()
        .exec();

        const totalPages = Math.ceil(
            (await Product.find().countDocuments())
        );


        return res.status(200).send(products);

    }
    catch(err) {
        return res.status(400).send(err);
    }
})

// to sort the product by fabric 
router.get("/sort/fabric", async (req, res) => {
    const fabric = req.query.fabric;
    const product = await Product
        .find({ gender: { $eq: `${fabric}` } })
        .lean()
        .exec();
    return res.status(201).send(product);
})

//to sort the product by colors
router.get("/sort/color", async (req, res) => {
    const color = req.query.color;
    const prodColor = await Product
        .find({ color: { $eq: `${color}` } })
        .lean()
        .exec();
    return res.status(201).send(prodColor);
})

// //to sort the product by brands
router.get("/sort/brand", async (req, res) => {
    try {
        const brand = req.query.brand;
    const prodBrand = await Product
        .find({ brand: { $eq: `${brand}` } })
        .lean()
        .exec();
    return res.status(200).send(prodBrand);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

//to sort the product by types
router.get("/sort/type", async (req, res) => {
    const type = req.query.type;
    const prodBrand = await Combi
        .find({ type: { $eq: `${type}` } })
        .lean()
        .exec();
    return res.status(201).send(prodBrand);
})

//to sort the product by price
router.get("/sort/price", async (req, res) => {
    const from = req.query.from;
    const to = req.query.to;
    const prodPrice = await Combi
        .find({ $and: [{ price: { $gt: `${from}` } }, { price: { $lt: `${to}` } }] })
        .lean()
        .exec();
    return res.status(201).send(prodPrice);
})

module.exports = router;