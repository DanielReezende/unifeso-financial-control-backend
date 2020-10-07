const express = require('express')

const routes = express.Router()
const { UserController } = require('./controllers')

routes.post('/', UserController.store)

// Route params /1
// Query params /user?nome=daniel

// Post = Criar
// Get = Para pegar tudo ou um especifico
// put = Atualizar
// delete = deletar


module.exports = routes;