import Itinerary from "../../models/Itinerary.js"

let allItineraries = async (request, response, next) => {
    try {
        let {id, city, name} = request.query
        let query = {}
        if (id) {
            query._id = id
        }
        if (city) {
            query.city = city
        }
        if (name) {
            query.name = {$regex: name, $options: 'i'}
        }
        let all = await Itinerary.find(query)
        return response.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let itineraryById = async (request, response, next) => {
    try {
        let idQuery = await Itinerary.findById(request.params.idParams)
        return response.status(200).json({
            response: idQuery
        })
    } catch (error) {
        next(error)
    }
}

let itineraryByCity = async (request, response, next) => {
    try {
        let byCity = await Itinerary.find({ city: request.params.idParams })
        return response.status(200).json({
            response : byCity
    })
    } catch (error) {
        next(error)
    }
}


export {allItineraries, itineraryById, itineraryByCity}