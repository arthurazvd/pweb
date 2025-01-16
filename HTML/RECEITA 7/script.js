let cervejas = [];

const carregarTabela = cervejas => {
    const tbody = document.getElementById("cervejasBody");
    let tabelaHtml = "";
    cervejas.forEach(({ id, name, alcohol, yeast, malts }) => {
        tabelaHtml += `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${alcohol}</td>
                <td>${yeast}</td>
                <td>${malts}</td>
            </tr>
        `;
    });
    tbody.innerHTML = tabelaHtml;
};

async function carregarCervejas() {
    try {
        let res = await fetch("https://random-data-api.com/api/v2/beers?size=3");
        cervejas = await res.json();
        carregarTabela(cervejas);
    } catch (err) {
        document.getElementById("cervejasTable").innerHTML = `Erro: ${err}`;
    }
}

let botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", carregarCervejas);
