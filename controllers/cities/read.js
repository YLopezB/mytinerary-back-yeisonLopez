import City from "../../models/City.js";

let allCities = async (request, response, next) => {
    try {
        let {id, name, country, continent, language, currency, visa} = request.query
        let query = {}
        if (id) 
            query._id = id
        if (name) 
            query.name = {$regex: '^'+name, $options: 'i'}
        if (country) 
            query.country = {$regex: country, $options: 'i'}
        if (continent) 
            query.continent = {$regex: continent, $options: 'i'}
        if (language) 
            query.language = {$regex: language, $options: 'i'}
        if (currency)
            query.currency = {$regex: currency, $options: 'i'}
        if (visa) 
            query.visaRequirement = visa.toLowerCase()
        let all = await City.find(query)
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