import { Router } from "express";
import {allCities, cityById} from "../controllers/cities/read.js";
import {createCity, createManyCities} from "../controllers/cities/create.js";
import { update } from "../controllers/cities/update.js";
import { deleteCity } from "../controllers/cities/delete.js";
import passsport from "../middlewares/passport.js";

const citiesRouter = Router();

citiesRouter.get("/allCities", allCities);
citiesRouter.get("/id/:idParams", cityById);
citiesRouter.post("/create", createCity);
citiesRouter.post("/insertMany", createManyCities);
citiesRouter.put("/update", update);
citiesRouter.delete("/delete/:idParams", deleteCity);

export default citiesRouter;