import User from "../models/User.js"

export default async (request, response, next) => {
    try {
        let email = request.body.email
        let account = await User.findOne({email: email})
        if (account) {
            return response.status(400).json({
                succes: false,
                message: "User alredy exists"
            })
        }
        next()
    } catch (error) {
        next(error)
    }
}