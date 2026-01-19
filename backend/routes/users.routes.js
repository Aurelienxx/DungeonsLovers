import express from "express";
import { getAllUsers, getUser, createUser, updateUser, deleteUser} from "../controllers/users.controller.js"
import { authenticateToken } from "../controllers/auth.controller.js"

const router = express.Router();

// Retourne tous les utilisateurs dans la base de données.
router.get("/getUsers", authenticateToken, getAllUsers);

// Retourne l'utilisateur correspondant à l'ID.
router.get("/getUser/:id", authenticateToken, getUser);

// Créer un nouvel user dans la base de données.
router.post("/createUser", createUser);

// Modifie l'utilisateur correspondant à l'ID.
router.put("/editUser/:id", authenticateToken, updateUser);

// Supprime l'utilisateur correspondant à l'ID.
router.delete("/delUser/:id", deleteUser);

export default router;
