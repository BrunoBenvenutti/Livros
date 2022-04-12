const controllers = require('../controllers/autoresControllers.js')

server.get('/autores', controllers.autoresGetAll)

server.get('/autores/:codigo', controllers.autoresGetById)

server.get('/autores/ai/:codigo', controllers.autoresAi)

server.delete('/autores/:codigo', controllers.autoresDelete)

server.put('/autores/:codigo', controllers.autoresUpdate)





