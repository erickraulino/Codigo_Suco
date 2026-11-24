let resposta = document.getElementById('resposta')

let btn_cad_usuario = document.getElementById('btn_cad_usuario')

btn_cad_usuario.addEventListener('click', (e)=>{
    e.preventDefault()

    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const cpf = document.getElementById('cpf')
    const telefone = document.getElementById('telefone')

    let valores = {
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone
    }

    fetch(`http://localhost:3000/usuario`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados =>{
        console.log(dados)

        resposta.innerHTML = ''
        resposta.innerHTML += `${dados.message}`
        resposta.innerHTML += `<br><br>`
    })
    .catch((err)=>{
        console.error('Não foi possível cadastrar o Usuário',err)
        resposta.innerHTML = ''
        resposta.innerHTML += `${dados.message}`
        resposta.innerHTML += `<br><br>`
    })
    
})