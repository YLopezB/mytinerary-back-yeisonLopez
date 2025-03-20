import City from "../../models/City.js";

let createCity = async (request, response, next) => {
    try {
        let create = await City.create(request.body)
        return response.status(201).json({
            response: create
        })
    } catch (error) {
        next(error)
    }
}

let createManyCities = async (request, response, next) => {
    try {
        let insertManyCities = await City.insertMany(request.body)
        return response.status(201).json({
            response: insertManyCities
        })
    } catch (error) {
        next(error)
    }
}

export {createCity, createManyCities}