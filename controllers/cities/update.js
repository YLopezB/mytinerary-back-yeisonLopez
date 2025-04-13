import City from "../../models/City.js"

let update = async (request, response, next) => {
    try {
        let updateCity = await City.updateOne(
            {_id: request.body._id},
            {
                name: request.body.name,
                country: request.body.country,
                continent: request.body.continent,
                description: request.body.description,
                image: request.body.image,
                currency: request.body.currency,
                language: request.body.language,
                population: request.body.population,
                climate: request.body.climate,
                naturalAttractions: request.body.naturalAttractions,
                visaRequirement: request.body.visaRequirement,
                publicTransport: request.body.publicTransport,
            }
        )
        return response.status(200).json({updateCity})
    } catch (error) {
        next(error)
    }
}

export {update}