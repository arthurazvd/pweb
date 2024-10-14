let cervejas = ["Guiness", "Desperados", "Becks"]    

const carregarDiv = () => {

    const div = document.getElementById("meu amor")

    const cervejasHtml = cervejas.map( item => `<h1>${item}</h1>` ) 

    div.innerHTML = `${cervejasHtml.join("\n")}`

}



let botao = document.getElementById("botaoCarregar")

botao.addEventListener("click", carregarDiv)    