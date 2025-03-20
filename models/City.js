import {Schema, model} from "mongoose";

let collection = "cities";
let schema = Schema({
    name:{type:String, required:true},
    country:{type:String, required:true},
    continent:{type:String, required:true},
    description:{type:String, required:true},
    image:{type:String, required:true},
    currency:{type:String, required:true},
    language:{type:String, required:true},
    population:{type:Number, required:true},
    climate: {type: String},
    naturalAttractions:{type: [String]},
    visaRequirement: {type: Boolean},
    publicTransport: {type: [String]},
    timezone: {type: String, required: true}
},{
    timestamps:true
})

let City = model(collection, schema)

export default City;