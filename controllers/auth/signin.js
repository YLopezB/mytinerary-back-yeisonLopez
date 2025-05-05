import User from "../../models/User.js"

export default async (request, response, next) => {
    try {
        await User.findOneAndUpdate(
            {email: request.user.email},
            {online: true}
        )
        return response.status(200).json({
            success: true,
            message: "Signed In",
            token: request.token,
            user: {
                name: request.user.name,
                role: request.user.role,
                photo: request.user.photo
            }
        })
    } catch (error) {
        next(error)
    }
}