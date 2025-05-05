import { Router } from "express";
import {allItineraries, itineraryById, itineraryByCity} from "../controllers/itineraries/read.js";
import { createItinerary, createManyItineraries } from "../controllers/itineraries/create.js";
import { update } from "../controllers/itineraries/update.js";
import { deleteItinerary } from "../controllers/itineraries/delete.js";
import passport from "../middlewares/passport.js";


const itinerariesRouter = Router();

itinerariesRouter.get("/allItineraries", allItineraries);
itinerariesRouter.get("/id/:idParams", itineraryById);
itinerariesRouter.get("/itineraryByCity/:idParams", itineraryByCity);
itinerariesRouter.post("/create", createItinerary);
itinerariesRouter.post("/insertMany", createManyItineraries);
itinerariesRouter.put("/update", update)
itinerariesRouter.delete("/delete/:idParams", deleteItinerary)

//passport.authenticate('jwt', {session: false}),
export default itinerariesRouter;