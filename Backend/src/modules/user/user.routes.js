
import express from 'express';
import { signUp, signIn } from "./user.controller.js";

const userRoutes = express.Router()


userRoutes.post("/signUp", signUp);
userRoutes.post("/signIn", signIn);









export default userRoutes;