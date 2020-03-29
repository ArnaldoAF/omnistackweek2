const express = require('express');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();


/*
Tipos de parametros

Query Params : Parametros nomeados enviados na rota apos o "?" (Filtros, Paginação) request.query
Route Params : Parametros utilizados para indentificar recussos(após a rota) request.params
Request Body : Corpo da requisição usado p/ alterar ou criar recursos request.body
*/

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;

