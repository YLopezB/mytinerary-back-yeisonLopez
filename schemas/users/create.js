import joi from 'joi-oid'

const schema = joi.object({
    name: joi.string().alphanum().required().messages({
      'string.base': 'Name must be a text',
      'string.alphanum': 'Do not use special characters, only letters A-Z',
      'string.empty': 'Name is required',
    }),
    lastName: joi.string().alphanum().required().messages({
      'string.base': 'Last name must be a text',
      'string.alphanum': 'Do not use special characters in the last name',
      'string.empty': 'Last name is required',
    }),
    email: joi.string().email().required().messages({
      'string.email': 'You must enter a valid email',
      'string.empty': 'Email is required',
    }),
    password: joi.string().min(8).required().messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 8 characters long',
    }),
    photo: joi.string().uri().required().messages({
      'string.uri': 'Photo must be a valid URL',
      'string.empty': 'Photo URL is required',
    }),
    country: joi.string().alphanum().required().messages({
      'string.alphanum': 'Do not use special characters in the country name',
      'string.empty': 'Country is required',
    }),
    role: joi.number().integer().min(1).max(3).required().messages({
      'number.base': 'Role must be a number',
      'number.min': 'Role must be at least 1',
      'number.max': 'Role must be at most 3',
      'number.empty': 'Role is required',
    })
  });

  export default schema