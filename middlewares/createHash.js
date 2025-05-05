import bcryptjs from "bcryptjs";

export default (request, response, next) => {
    let password = request.body.password
    let hastPass = bcryptjs.hashSync(password, 10)
    request.body.password = hastPass
    next()
}