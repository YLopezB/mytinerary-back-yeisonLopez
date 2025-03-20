import City from "../../models/City.js";

let allCities = async (request, response, next) => {
    try {
        let all = await City.find()
        return response.status(200).json({
            response: all
        })
    }catch (error) {
        next(error)
    }
}

let cityById = async (request, response, next) => {
    try {
        let idQuery = await City.findById(request.params.idParams)
        return response.status(200).json({
            response: idQuery
        })
    } catch (error) {
        next(error)
    }
}

export {allCities, cityById}