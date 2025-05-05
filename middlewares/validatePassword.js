import bcryptjs from "bcryptjs";

export default (request, response, next) => {
    try {
        let passwordBody = request.body.password
        let password = request.user.password
        let compare = bcryptjs.compareSync(passwordBody, password)
        if (compare)  
            return next()
        return response.status(400).json({
            success: false,
            message: "Invalid Password"
        })
    }    
    catch (error) {
        next(error)
    }    
}