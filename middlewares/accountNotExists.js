import User from "../models/User.js";

export default async (request, response, next) => {
    try {
        let account = await User.findOne({email : request.body.email})
        if (account){
            request.user = {
                name: account.name,
                email: account.email, 
                password: account.password,
                role: account.role,
                photo: account.photo
            }
            return next()
        }
        return response.status(400).json({
            succes: false, 
            message: "User does not exists"})
    } catch (error) {
        next(error)
    }
}