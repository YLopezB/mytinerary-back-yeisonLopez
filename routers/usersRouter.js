import { Router } from "express";
import validator from "../middlewares/validator.js"
import schemaUser from "../schemas/users/create.js";
import { register } from "../controllers/users/create.js"
import { deleteUser } from "../controllers/users/delete.js";
import { allUsers, validateToken } from "../controllers/users/read.js";
import { update } from "../controllers/users/update.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import passport from "../middlewares/passport.js";

const usersRouter = Router();

usersRouter.get("/allUsers", allUsers)
usersRouter.get('/validateToken', passport.authenticate('jwt', {session: false}), validateToken)
usersRouter.post("/create", validator(schemaUser), accountExists, createHash, register)
usersRouter.put("/update", createHash, update)
usersRouter.delete("/delete/:idParams", deleteUser)


export default usersRouter;