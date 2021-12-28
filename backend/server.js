//Importation du package http de Node
const http = require('http');

//Création d'un serveur
const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du premier serveur !');
});

//Ecoute du serveur
server.listen(process.env.PORT || 3000);