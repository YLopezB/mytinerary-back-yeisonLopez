import City from "../../models/City.js"

let deleteCity = async (request, response, next) => {
    try {
        let deleteCity = await City.findByIdAndDelete(request.params.idParams)
        deleteCity ? response.status(200).json({response: deleteCity}) : 
        response.status(400).json({response: "Not found"})
    } catch (error) {
        next(error)
    }
}

export { deleteCity }