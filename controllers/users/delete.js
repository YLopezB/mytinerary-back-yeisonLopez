import User from "../../models/User.js"

let deleteUser = async (request, response, next) => {
    try {
        let deleteU = await User.findByIdAndDelete(request.params.idParams)
        deleteU ? response.status(200).json({response: deleteU}) : 
        response.status(400).json({response: "Not found"})
    } catch (error) {
        next(error)
    }
}

export { deleteUser }