//importing Product model/schema
const productModel = require("../../models/products/products");
//importing validator
const productValidators = require("../validators/products");

const controller = {
    createProduct: async (req, res) => {
        console.log(req.body);

        //Validation
        //JOI will help you convert numbers which read as string in backend to integer
        //Helps you parse into correct data type
        //try without below 2 lines and see the result in terminal - test using price
        //without JOI - price = $123 string
        //with JOI - price = $123 integer
        const validationResults =
            productValidators.createProductValidator.validate(req.body);

        if (validationResults.error) {
            res.send("validation error occured");
            console.log(validationResults);
            return;
        }

        const validatedResults = validationResults.value;
        console.log(validatedResults);

        res.send("validated");

        //Return here to prevent data from adding to database if troubleshooting
        // return

        //in Mongoose = create , MongoDB = insert
        try {
            //.create is a promise, hence await)
            //in mongoose DB, there is a __v field also (that you didnt create)
            // this one is the version of the data, to track how many times you updated - like an audit trail
            await productModel.create(req.body);
        } catch (err) {
            console.log(err);
        }

        res.send("asd");
    },

    listProducts: async (req, res) => {
        //.exec() is a promise - need await
        const products = await productModel.find().exec();
        //or const products = await productModel.find({})

        console.log(products);

        res.render('products/index', {products});
    },

    getProduct: async(req, res) => {
        const product = await productModel.findById(req.params.product_id)
        res.render('products/show', {product})
    }
};

module.exports = controller;
