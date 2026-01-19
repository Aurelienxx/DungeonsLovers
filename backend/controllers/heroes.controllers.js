import express from 'express'
import db from '../config/db.js'

const router = express.Router()

// Renvoie tous les héros de la table heroes.
export const getHeroes = (req, res) => {
  db.query("SELECT * FROM heroes", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
