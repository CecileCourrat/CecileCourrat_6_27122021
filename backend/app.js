//Importation d'Express
const express = require('express');

//Création d'un application express
const app = express();

app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});
  
app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
    next();
});

app.use((req, res) => {
    console.log('Réponse envoyée avec succès !');
});


//Exportation de cette application
module.exports = app;
