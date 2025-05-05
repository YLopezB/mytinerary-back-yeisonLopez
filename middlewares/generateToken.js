import jwt from 'jsonwebtoken'

export default (request, response, next) => {
    console.log();
    
    const token = jwt.sign({
        email: request.user.email,
        role: request.user.role,
        photo: request.user.photo
        },
        process.env.ENCRYPTION,
        {expiresIn: "6h"}
    )
    request.token = token
    next()
}