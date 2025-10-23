import express, { Router } from "express";
const router = Router();
import login from "../Controler/AutoControler.js";
router.post("/login", login);
export default router;
