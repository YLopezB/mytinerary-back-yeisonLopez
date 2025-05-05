import User from "../../models/User.js";

let allUsers = async (request, response, next) => {
    try {
        let {id, email, role, country} = request.query
        let query = {}
        if(id)
            query._id = id
        if(email)
            query.email = {$regex: '^'+email, $options: 'i'}
        if(role)
            query.role = role
        if(country)
            query.country = {$regex: country, $options: 'i'}
        let all = await User.find(query)
        return response.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

const validateToken = async (req, res, next) => {
    try {
      return res.status(200).json({
        success: true,
        response: {
          email: req.user.email,
          role: req.user.role,
          photo: req.user.photo}
      });
    } catch (error) {
        next(error);
    }
  };

export { allUsers, validateToken }