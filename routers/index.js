import { Router } from "express";
import citiesRouter from "./citiesRouter.js"
import itinerariesRouter from "./itinerariesRouter.js";
import usersRouter from "./usersRouter.js";
import routerAuth from "./auth.js";

let routerIndex = Router();

routerIndex.use("/cities", citiesRouter);
routerIndex.use("/itineraries", itinerariesRouter);
routerIndex.use('/users', usersRouter)
routerIndex.use('/auth', routerAuth)

export default routerIndex;