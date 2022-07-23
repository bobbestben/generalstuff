//Validating the data
const Joi = require('joi')

//Schema here is different from Mongoose Schema
//Why need this validator? because Mongoose schema has limited validation

//It will help you convert numbers which read as string in backend to integer
//Helps you parse into correct data type
const createProductValidator = Joi.object({
    name: Joi.string().min(3).required(),
    img: Joi.string().required(),
    price: Joi.number().min(0).required()
})

module.exports = {
    createProductValidator
}