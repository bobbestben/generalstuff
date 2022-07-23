const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

})

//Created this Product model with the above schema
const Product = mongoose.model('Product', productSchema)

module.exports = Product