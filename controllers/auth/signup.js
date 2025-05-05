import User from "../../models/User.js";

export default async (request, response, next) => {
    try {
        await User.findOneAndUpdate(
            {email: request.user.email},
            {online: false})
            return response.status(200).json({
                success: true,
                message: 'Sign up'
            })
    } catch (error) {
        next(error)
    }
}