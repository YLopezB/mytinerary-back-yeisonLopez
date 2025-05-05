import User from "../../models/User.js";

let update = async (request, response, next) => {
    try {
        let updateUser = await User.updateOne(
            {email : request.body.email},
            {
                name: request.body.name,
                lastName: request.body.lastName,
                password: request.body.password,
                photo: request.body.photo,
                country: request.body.country,
                role: request.body.role
            }
        ) 
        return response.status(201).json({updateUser})
    } catch (error) {
        next(error)
    }
}

export { update }