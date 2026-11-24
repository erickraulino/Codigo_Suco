const Usuario = require('../models/Usuario')

const cadastrar = async (req,res)=>{
    const valores = req.body
    console.log(valores)

    try{
        await Usuario.create(valores)
        res.status(200).json({message: 'dados cadastrados com sucesso!'})
    }catch(err){
        console.error('Erro ao cadastrar o usuário',err)
        res.status(500).json({message: 'Erro ao cadastrar o usuário'})
    }

}


module.exports = { cadastrar }