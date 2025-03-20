import { Router } from "express";
import {allCities, cityById} from "../controllers/cities/read.js";
import {createCity, createManyCities} from "../controllers/cities/create.js";

const citiesRouter = Router();

citiesRouter.get("/allCities", allCities);
citiesRouter.get("/id/:idParams", cityById);
citiesRouter.post("/create", createCity);
citiesRouter.post("/insertMany", createManyCities);

export default citiesRouter;