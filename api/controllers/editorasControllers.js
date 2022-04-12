const models = require('../models/editorasModels')

module.exports = {
    editorasGetAll,
    editorasGetById,
}

function editorasGetAll(req, res) {
    console.log('Listar Editoras { MODEL }')
    models.getAllEditoras(function (err, resposta) {
        console.log('Retorno de Editoras { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    })
    
}

function editorasGetById(req, res) {
    console.log('Listar Editoras { MODEL }')
    const id = req.params.codigo
    models.getByIdEditoras(id, function (err, resposta) {
        console.log('Retorno Consulta Editoras { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    })
}

