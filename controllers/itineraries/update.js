import Itinerary from "../../models/Itinerary.js";

let update = async (request, response, next) => {
    try {
        let updateItinerari = await Itinerary.updateOne(
            {_id: request.body._id},
            {
                city: request.body.city,
                name: request.body.name,
                photo: request.body.photo,
                userName: request.body.userName,
                userPhoto: request.body.userPhoto,
                price: request.body.price,
                duration: request.body.duration,
            }
        )
        return response.status(200).json({updateItinerari})
    } catch (error) {
        next(error)
    }
}

export {update}