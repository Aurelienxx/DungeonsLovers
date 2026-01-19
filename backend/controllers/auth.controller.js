import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });

import db from '../config/db.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { createUserInDb } from '../services/users.service.js'

const JWT_SECRET = process.env.JWT_SECRET;

export const loginUser = (req, res) => {
  const { Username, Password } = req.body

  db.query(
    "SELECT * FROM users WHERE Username = ?", [Username], 
    (err, result) => {
      if (err) return res.status(500).json(err)

      if (result.length === 0) 
        return res.status(404).json({ message: "Utilisateur non trouvé" })

      const user = result[0]

      const isValid = bcrypt.compareSync(Password, user.Password)
      if (!isValid) {
        return res.status(401).json({ message: "Mot de passe incorrect" })
      }

      const token = jwt.sign({ UserId: user.UserId, Username: user.Username }, JWT_SECRET, { expiresIn: '1h' })

      res.json({ token })
  })
}

export const registerUser = (req, res) => {
  const { LastName, FirstName, Password, Username } = req.body;

  db.query(
    "SELECT * FROM users WHERE Username = ?", [Username], 
    (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length !== 0) {
        return res.status(400).json({ message: "Utilisateur avec le même pseudonyme existe déjà" })
      }

      const saltRounds = 10;
      const hashedPassword = bcrypt.hashSync(Password, saltRounds);

      createUserInDb(
        { LastName, FirstName, Password: hashedPassword, Username }, 
        (err, result) => {
          if (err) return res.status(500).json(err)
          
          const token = jwt.sign({UserId: result.insertId, Username}, JWT_SECRET, {expiresIn: '1h'})
          return res.json({ token })
        }
      )
    }
  )
}

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) return res.status(401).json({ message: "Token manquant" })

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token invalide" })

    req.user = user
    next()
  })
}
