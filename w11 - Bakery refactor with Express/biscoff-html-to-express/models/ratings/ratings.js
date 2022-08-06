const mongoose = require('mongoose')

const productRatingSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    product_id: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },

})

//Created this Product model with the above schema
//in MongoDB, collection is created with the variable name in plural
//eg. ProductRating = productratings
const ProductRating = mongoose.model('ProductRatings', productRatingSchema)

module.exports = ProductRating