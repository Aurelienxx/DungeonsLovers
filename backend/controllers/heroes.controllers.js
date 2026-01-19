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

export const updateHero = (req, res) => {
  const heroId = req.params.id;
  const { Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListID, MiscellaneousID, imageURL } = req.body;  
  db.query(
    `UPDATE heroes SET 
      Name = ?, 
      MaxHP = ?,
      Dodge = ?,
      Protection = ?,
      Speed = ?,
      AccuracyModifier = ?,
      CriticChance = ?,
      Damage = ?,
      ResListID = ?,
      MiscellaneousID = ?,
      imageURL = ?
    WHERE HeroId = ?`,
    [Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListID, MiscellaneousID, imageURL, heroId],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Héros mis à jour avec succès" });
    }
  );
};

export default router;