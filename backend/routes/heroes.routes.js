import express from "express";
import { getHeroes } from "../controllers/heroes.controllers.js"

const router = express.Router();

// Retourne tous les héros dans la base de données.
router.get("/getHeroes", getHeroes);

export default router;
