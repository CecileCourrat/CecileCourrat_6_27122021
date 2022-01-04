//Importation d'Express
const express = require('express');

//const helmet = require('helmet');

const path = require('path');


const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

//Création d'une application express
const app = express();

//app.use(helmet());

//Importation de Mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cecile_courrat:iTg1nmrOd95R0URM@cluster0.kslyr.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});



app.use(express.json());


app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth', userRoutes);

app.use('/api/sauces', sauceRoutes);

//Exportation de cette application
module.exports = app;
