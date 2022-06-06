const express = require("express");

const Food = require("../model/food.model");

const router = express.Router();



router.get("", async(req, res) => {
    try{
        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 10;

        const skip = (page - 1) * pagesize;

        const foods = await Food.find()
        .skip(skip)
        .limit(pagesize)
        .lean()
        .exec();

        const totalPages = Math.ceil(
            (await Food.find().countDocuments())
        );

        //const foods = await Food.find().lean().exec();

        return res.status(200).send({ foods, totalPages });
        //return res.status(200).send(foods);

    }
    catch(err) {
        return res.status(400).send(err);
    }
})

module.exports = router;