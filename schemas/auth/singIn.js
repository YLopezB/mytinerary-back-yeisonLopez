import joi from 'joi-oid'

const SchemaSingIn = joi.object({
    email: joi.string().email().required().messages({
    'string.base' : 'Must be a text string',    
    'string.email': 'You must enter a valid email',
    'string.empty': 'Email is required',
    }),
    password: joi.string().min(8).required().messages({
    'string.base' : 'Must be a text string', 
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 8 characters long',
    })    
})

export default SchemaSingIn