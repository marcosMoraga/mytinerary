const joi = require('joi')
const passwordComplexity = require("joi-password-complexity");

const validator = (req, res, next) => {  // se valida el register

    const complexityOptions = {
        min: 8,
        max: 15,
        lowerCase: 1,
        upperCase: 1,
        numeric: 1,
        symbol: 1,
        requirementCount: 6,
    };
    const schema = joi.object({
        userName: joi.string().max(12).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'El usuario debe contener mas de 3 caracteres',
            'string.empty': 'UserName is not allowed to be empty',
            'string.pattern.base': 'UserName should contain just letters from a-z or A-Z',
            'string.max': 'userName length must be less than or equal to 12 characters long'
        }),
        password: !req.body.google ? passwordComplexity(complexityOptions).required().messages({
            "passwordComplexity.tooShort": 'password should be at least 8 characters long',
            "passwordComplexity.lowercase": 'password should contain at least 1 lower-cased letter',
            "passwordComplexity.uppercase": 'password should contain at least 1 upper-cased letter',
            "passwordComplexity.numeric": 'password should contain at least 1 number',
            "passwordComplexity.symbol": 'password should contain at least 1 special caracter',
            "passwordComplexity.tooLong": 'password should not be longer than 15 characters',
            'string.empty': 'password is not allowed to be empty'
        }) : joi.string().trim().min(3).required(),
        lastName: joi.string().max(12).min(3).required().pattern(new RegExp('[a-zA-Z]')).trim().messages({
            'string.empty': 'lastName is not allowed to be empty',
            'string.pattern.base': 'LastName should contain just letters from a-z or A-Z',
            'string.max': 'userName length must be less than or equal to 12 characters long',
            'string.min': 'El usuario debe contener mas de 3 caracteres',
        }),
        email: joi.string().required().email().trim().messages({
            'string.empty': 'email is not allowed to be empty',
            'string.email': 'email must be a valid email'
        }),
        img: joi.string().uri().required().trim().messages({
            'string.empty': 'img is not allowed to be empty',
            'string.uri': 'img must be a valid uri'
        }),
        country: joi.string().trim().messages({
            'string.empty': 'country is not allowed to be empty'
        }),
        google: joi.boolean(),
    })

    const validation = schema.validate(req.body, { abortEarly: false })

    if (validation.error) {
        return res.json({ success: false, validate: validation.error.details })
    }

    next()


}

module.exports = validator