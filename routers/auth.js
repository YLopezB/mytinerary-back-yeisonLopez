import { Router } from "express";
import signin from "../controllers/auth/signin.js";
import SchemaSingIn from "../schemas/auth/singIn.js";
import validator from "../middlewares/validator.js";
import accountNotExists from "../middlewares/accountNotExists.js";
import validatePassword from "../middlewares/validatePassword.js";
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js";
import signup from "../controllers/auth/signup.js";


const routerAuth = Router()

routerAuth.post("/signIn", validator(SchemaSingIn), accountNotExists, validatePassword, generateToken, signin)
routerAuth.get('/signUp', passport.authenticate('jwt', {session: false}), signup )

export default  routerAuth 