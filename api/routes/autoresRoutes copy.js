const controllers = require('../controllers/autoresControllers.js')

server.get('/autores', controllers.autoresGetAll)

server.get('/autores/:codigo', controllers.autoresGetById)




