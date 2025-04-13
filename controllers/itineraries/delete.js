import Itinerary from "../../models/Itinerary.js"

let deleteItinerary = async (request, response, next) => {
    try {
        let deleteItinerary = await Itinerary.findByIdAndDelete(request.params.idParams)
        deleteItinerary ? response.status(200).json({response: deleteItinerary}) : 
        response.status(400).json({response: "Not found"})
    } catch (error) {
        next(error)
    }
}

export { deleteItinerary }