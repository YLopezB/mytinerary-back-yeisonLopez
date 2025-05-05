const validator = (schema) => [
    (request, response, next) => {
        const validation = schema.validate(request.body, {abortEarly:false})
        if (validation.error) {            
            return response.status(400).json({
                success: false,
                message: validation.error.details.map(error => error.message)
            })
        }
        next()
    }
]

export default validator