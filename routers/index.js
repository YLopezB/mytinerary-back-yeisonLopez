import { Router } from "express";
import citiesRouter from "./citiesRouter.js"

let routerIndex = Router();

routerIndex.use("/cities", citiesRouter);

export default routerIndex;