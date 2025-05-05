import { Schema, model } from "mongoose";

let collection = "itineraries";
let schema = Schema({
      city: {type: Schema.Types.ObjectId,ref:"cities", required:true},
      name: {type: String, required: true },
      photo: {type: String, required: true },
      userName: {type: String, required: true },
      userPhoto: {type: String, required: true },
      price: {type: Number, required: true },
      duration: {type: Number, required: true },
      likes: {type: Number},
      hashtags: [{type: String}]
    }, {
      timestamps: true
});

let Itinerary = model(collection, schema)

export default Itinerary;

