const { Usuario, Suco } = require('./models/rel')
const db = require('./db/conn')

async function syncDataBase() {
    try{
        await db.sync({force: true})
        console.log('conexão realizada com sucesso!')
    }catch(err){
        console.error('Erro ao conectar com o banco de dados!',err)
    }finally{
        await db.close()
        console.log('Fechando a conexão com o banco de dados!')
    }
}

syncDataBase()

