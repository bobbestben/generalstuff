const productRatingModel = require('../../models/ratings/ratings')
const userModel = require('../../models/users/users')

module.exports = {

    createRatings: async (req, res) => {
        // validation

        console.log(req.session.user)
        
        const productID = req.params.product_id
        const validatedValues = req.body

        // get user from DB
        let user = null

        try {
            user = await userModel.findOne({email: req.session.user})
        } catch(err) {
            res.redirect('/login')
            return
        }

        //create the ratings
        try {
            await productRatingModel.create({
                user_id: user._id,
                product_id: productID,
                rating: validatedValues.rating

            })
        } catch(err) {
            res.redirect('/users/login')
            return
        }
        res.redirect('/products')
    }

}