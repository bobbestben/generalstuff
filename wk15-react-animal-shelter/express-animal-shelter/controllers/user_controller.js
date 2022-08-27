const userModel = require('../models/user')

module.exports = {
    show: async (req, res) => {
        const { username } = req.body

        try {
            const user = await userModel.find({ username })//.setOptions({ sanitizeFilter: true })
            return res.json(user)
        } catch (err) {
            // console.log('err: ', err)
            res.status(500)
            return res.json({error: "failed to list user"})
        }
    }
}
