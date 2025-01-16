const criarTabela = (itens, cabecalho, props) => {
    let tabela = `<table>
        <thead>
            <tr>
                ${cabecalho.map(header => `<th>${header}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            ${itens.map(item => 
                `<tr>
                    ${props.map(prop => `<td>${item[prop] || 'N/A'}</td>`).join('')}
                </tr>`).join('')}
        </tbody>
    </table>`;

    return tabela;
};

let cervejas = [];
let users = [];

const carregarDiv = (itens, Id, cabecalho, props) => {
    const div = document.getElementById(Id);
    const tableHtml = criarTabela(itens, cabecalho, props);
    div.innerHTML = tableHtml;
};

function carregarDados() {
    Promise.all([
        fetch("https://random-data-api.com/api/v2/beers?size=10"),
        fetch("https://random-data-api.com/api/v2/users?size=10")
    ])
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(([cervejasData, usersData]) => {
            cervejas = cervejasData;
            users = usersData;

            carregarDiv(
                cervejas,
                "cervejasDiv",
                ["Nome", "Álcool", "Estilo", "Amargor", "Lúpulo", "Malte"],
                ["name", "alcohol", "style", "ibu", "hop", "malts"]
            );

            carregarDiv(
                users,
                "usersDiv",
                ["Nome", "Sobrenome", "Usuário", "Aniversário", "Gênero"],
                ["first_name", "last_name", "username", "date_of_birth", "gender"]
            );
        })
        .catch(error => {
            console.error("Erro ao carregar dados: ", error);
        });
}

let botao = document.getElementById("botaoCarregarTabelas");
botao.addEventListener("click", carregarDados);
