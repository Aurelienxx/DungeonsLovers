# Projet créé par Piquet Edwyn et Pinceel Matthieu GROUPE 9

Application web fullstack utilisant **Vue.js** pour le frontend et **Node.js / Express** pour le backend, avec une base de données **MySQL**.  
Le projet met en place une API REST ainsi qu’un système d’authentification avec **JWT**.

---

## Technologies utilisées

### Frontend
- Vue 3
- TypeScript
- Vite
- Axios

### Backend
- Node.js
- Express.js
- MySQL
- JSON Web Token (JWT)
- Nodemon

### Base de données
- MySQL
- Base relationnelle

---

## Structure du projet

DungeonsLovers/

├── backend/ controllers/ | services/ | routes/ | config/ | app.js

├── src/ assets/ | components/ | pages/ | types/ | App.vue | main.ts

├── public/

├── package.json

├── vite.config.ts

└── README.md

---

## Commande MySQL pour créer la base de données :

CREATE DATABASE DungeonDatabase;

USE DungeonDatabase

CREATE USER 'DungeonLover'@'localhost' IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON *.* TO 'DungeonLover'@'localhost' WITH GRANT OPTION;

FLUSH PRIVILEGES;

CREATE TABLE users (UserId int NOT NULL AUTO_INCREMENT, LastName varchar(255), FirstName varchar(255), Username varchar(255) NOT NULL, Password varchar(255) NOT NULL, PRIMARY KEY (UserId));

CREATE TABLE otherInfos(MiscellaneousId int NOT NULL AUTO_INCREMENT, forward int NOT NULL, backward int NOT NULL, critBuffBonus varchar(255), isReligious boolean NOT NULL, providesItems varchar(255) NOT NULL, PRIMARY KEY (MiscellaneousId));

CREATE TABLE resistances(ResListId int NOT NULL AUTO_INCREMENT, Stun int NOT NULL, Blight int NOT NULL, Disease int NOT NULL, Move int NOT NULL, Bleed int NOT NULL, Debuff int NOT NULL, Trap int NOT NULL, DeathBlow int NOT NULL, PRIMARY KEY(ResListId));

CREATE TABLE heroes(HeroId int NOT NULL AUTO_INCREMENT, Name varchar(255), MaxHP int NOT NULL, Dodge double NOT NULL, Protection double NOT NUll, Speed double NOT NULL, AccuracyModifier double NOT NULL, CriticChance double NOT NULL, Damage double NOT NULL, ResListId int NOT NULL, MiscellaneousId int NOT NULL, imageURL varchar(255), PRIMARY KEY (HeroId), FOREIGN KEY (ResListId) REFERENCES resistances(ResListId), FOREIGN KEY (MiscellaneousId) references otherInfos(MiscellaneousId));

### Ajout des données : 



INSERT INTO resistances (Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES (40, 60, 20, 40, 30, 20, 10, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(1, 2, '+20% DMG', FALSE, 'None');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Abomination', 26, 7.5, 0, 7, 0, 2, 8.5, 1, 1);


INSERT INTO resistances (Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES (20, 20, 20, 20, 20, 20, 10, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(2, 2, '+10 DODGE', FALSE, 'Skeleton Key');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Antiquarian', 17, 10, 0, 5, 0, 1, 4, 2, 2);


INSERT INTO resistances (Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES (40, 30, 30, 40, 30, 30, 10, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(0, 2, '+33% DMG vs Marked', FALSE, 'Bandage');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Arbalest', 27, 0, 0, 3, 0, 6, 6, 3, 3);


INSERT INTO resistances
(Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES
(40, 30, 20, 40, 30, 30, 40, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(2, 2, '+33% DMG vs Marked', FALSE, 'None');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Bounty Hunter', 25, 5, 0, 5, 0, 4, 7.5, 4, 4);


INSERT INTO resistances
(Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES
(40, 30, 30, 40, 30, 30, 10, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(1, 1, '+15% PROT', TRUE, 'Holy Water');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Crusader', 33, 5, 0, 1, 0, 3, 9, 5, 5);


INSERT INTO resistances
(Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES
(50, 30, 40, 50, 65, 30, 0, 73);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(3, 1, '+20% Bleed Skill Chance', TRUE, 'None');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Flagellant', 22, 0, 0, 6, 0, 2, 4.5, 6, 6);



INSERT INTO resistances
(Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES
(20, 50, 30, 20, 30, 30, 50, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(2, 2, '+10 DODGE', FALSE, 'Shovel');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Grave Robber', 20, 10, 0, 8, 0, 6, 6, 7, 7);


INSERT INTO resistances
(Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES
(40, 40, 30, 40, 40, 30, 20, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(1, 0, '+33% DMG vs Bleeding', FALSE, 'None');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Hellion', 26, 10, 0, 4, 0, 5, 9, 8, 8);


INSERT INTO resistances
(Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES
(30, 30, 30, 30, 30, 30, 40, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(2, 2, '+2 SPD', FALSE, 'None');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Highwayman', 23, 10, 0, 5, 0, 5, 7.5, 9, 9);


INSERT INTO resistances
(Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES
(40, 40, 30, 40, 40, 30, 40, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(2, 2, '+20% Bleed Skill Chance', FALSE, '2 Dog Treats');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Houndmaster', 21, 10, 0, 5, 0, 4, 5.5, 10, 10);


INSERT INTO resistances
(Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES
(20, 40, 20, 20, 30, 40, 30, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(3, 3, '+40% Stress Healing Skills', FALSE, 'Medicinal Herbs');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Jester', 19, 15, 0, 7, 0, 4, 5.5, 11, 11);


INSERT INTO resistances
(Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES
(60, 40, 20, 60, 10, 40, 10, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(1, 0, '+10 ACC', TRUE, 'Medicinal Herbs');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Leper', 35, 0, 0, 2, 0, 1, 12, 12, 12);


INSERT INTO resistances
(Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES
(40, 30, 30, 40, 40, 30, 10, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(2, 2, '-33% Stress', FALSE, 'None');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Man-at-Arms', 31, 5, 0, 3, 0, 2, 7, 13, 13);


INSERT INTO resistances
(Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES
(40, 30, 30, 40, 30, 30, 10, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(0, 2, '+33% DMG vs Marked', FALSE, 'Bandage');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Musketeer', 27, 0, 0, 3, 0, 6, 6, 14, 14);


INSERT INTO resistances
(Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES
(20, 30, 40, 20, 40, 60, 10, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(2, 2, '+25% Healing Skills', FALSE, 'None');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Occultist', 19, 10, 0, 6, 0, 6, 5.5, 15, 15);


INSERT INTO resistances
(Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES
(20, 60, 50, 20, 20, 50, 20, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(1, 1, '+20% Blight Skill Chance', FALSE, 'Antivenom');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Plague Doctor', 22, 0, 0, 7, 0, 2, 5.5, 16, 16);

INSERT INTO resistances
(Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES
(50, 20, 30, 50, 30, 30, 20, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(2, 3, '+15% PROT', FALSE, 'None');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Shieldbreaker', 20, 8, 0, 5, 0, 6, 7.5, 17, 17);


INSERT INTO resistances
(Stun, Blight, Disease, Move, Bleed, Debuf, Trap, DeathBlow)
VALUES
(30, 30, 30, 30, 40, 30, 10, 67);

INSERT INTO otherInfos
(Forward, backward, critBuffBonus, isReligious, providesItems)
VALUES
(1, 1, '+25% Healing Skills', TRUE, 'None');

INSERT INTO Heroes
(Name, MaxHP, Dodge, Protection, Speed, AccuracyModifier, CriticChance, Damage, ResListId, MiscellaneousId)
VALUES
('Vestal', 24, 0, 0, 4, 0, 1, 6, 18, 18);
