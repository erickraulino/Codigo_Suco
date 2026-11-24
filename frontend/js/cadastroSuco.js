let resposta = document.getElementById('resposta')

let btn_cad_suco = document.getElementById('btn_cad_suco')

btn_cad_suco.addEventListener('click', (e)=>{
    e.preventDefault()

    const sabor = document.getElementById('sabor')
    const volume = document.getElementById('volume')
    const quantidade = document.getElementById('quantidade')
    const preco = document.getElementById('preco')

    let valores = {
        sabor: sabor,
        volume: volume,
        quantidade: quantidade,
        preco: preco
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
        console.error('Não foi possível cadastrar o Suco',err)
        resposta.innerHTML = ''
        resposta.innerHTML += `${dados.message}`
        resposta.innerHTML += `<br><br>`
    })
    
})