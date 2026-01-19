import express from "express";
import { getHeroes, updateHero } from "../controllers/heroes.controllers.js"
import { authenticateToken } from "../controllers/auth.controller.js"


const router = express.Router();

// Retourne tous les héros dans la base de données.
router.get("/getHeroes", getHeroes);

// Met à jour un héros existant.
router.put("/updateHero/:id",authenticateToken, updateHero); 

export default router;
