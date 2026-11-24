const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'

const db = require('./db/conn')
const usuarioController = require('./controller/usuario.controller')


// --- middleware ---
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// ----- rotas -------

app.post('/usuario', usuarioController.cadastrar)


// ------ server ---- 
db.sync()
    .then(()=>{
        app.listen(PORT, hostname, ()=>{
            console.log(`Servidor rodando em http://${hostname}:${PORT}`)
        })
    })
    .catch((err)=>{
        console.error('erro ao sincronizar com o banco de dados',err)
    })
