import { Router } from "express";
import citiesRouter from "./citiesRouter.js"
import itinerariesRouter from "./itinerariesRouter.js";

let routerIndex = Router();

routerIndex.use("/cities", citiesRouter);
routerIndex.use("/itineraries", itinerariesRouter);

export default routerIndex;