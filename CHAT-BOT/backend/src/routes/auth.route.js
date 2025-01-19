import express from "express";
import { singup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", singup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
