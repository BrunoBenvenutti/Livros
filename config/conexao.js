const mysql = require('mysql2')
const database = 'dados221d'

const conexao = mysql.createConnection({
    user: 'root',
    password: 'dnnaIhat3Y0u',
    host: 'localhost',
    port: 3306
})

conexao.connect((err) => {
    if(err){
        console.log('Erro ao conectar no MySQL')
        return
    }

    conexao.query('USE ' + database)
    console.log('\nConexao MySQL estabilizada com sucesso!')
})

module.exports = conexao;