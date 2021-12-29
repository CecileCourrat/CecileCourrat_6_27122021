//Importation d'Express
const express = require('express');

//Création d'un application express
const app = express();

//Importation de Mongoose
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://cecile_courrat:iTg1nmrOd95R0URM@cluster0.kslyr.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

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

app.use('/api/auth', userRoutes);

//Exportation de cette application
module.exports = app;
