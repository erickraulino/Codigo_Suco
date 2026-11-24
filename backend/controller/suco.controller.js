const Suco = require('../models/Suco')

const cadastrar = async (req,res)=>{

const valores = req.body
console.log(valores)

try{
    await Suco.create(valores)
    res.status(200).json({message: 'dados cadastrados com sucesso'})
}catch(err){
    console.error('erro ao cadastrar o suco')
    res.status(500).json('erro ao cadastrar o suco')
}

}

module.exports = { cadastrar }