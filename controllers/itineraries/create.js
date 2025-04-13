import Itinerary from "../../models/Itinerary.js"

let createItinerary = async (request, response, next) => {
    try {
        let create = await Itinerary.create(request.body)
        return response.status(201).json({
            response: create
        })
    } catch (error) {
        next(error)
    }
}

let createManyItineraries = async (request, response, next) => {
    try {
        let insertManyItineraries = await Itinerary.insertMany(request.body)
        return response.status(201).json({
            response: insertManyItineraries
        })
    } catch (error) {
        next(error)
    }
}

export {createItinerary, createManyItineraries}