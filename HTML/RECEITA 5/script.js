let timesDeFutebol = [
    "Flamengo", "Palmeiras", "São Paulo", "Corinthians", "Vasco", "Santos", "Grêmio", "Internacional", "Cruzeiro",
    "Atlético Mineiro"
];

function transformar(item) {
    return `
       <tr>
          <td> 
             <div class="times">
                <h1>${item}</h1>
             </div>
          </td>
       </tr>
    `;
}

function carregarTimes() {
    let thead = document.getElementById("tabela-times").querySelector("thead");
    let tbody = document.getElementById("tabela-times").querySelector("tbody");

    thead.innerHTML = `
       <tr>
          <th>
             <h1>
                Times de Futebol
             </h1>
          </th>
       </tr>
    `;

    let timesHtml = timesDeFutebol.map(transformar);
    tbody.innerHTML = `${timesHtml.join("\n")}`;

    document.getElementById("botaoMostrarOrdenado").style.display = "none";
    document.getElementById("botaoCarregar").style.display = "none";
}

function mostrarOrdenadamente() {
    let thead = document.getElementById("tabela-times").querySelector("thead");
    let tbody = document.getElementById("tabela-times").querySelector("tbody");

    thead.innerHTML = `
       <tr>
          <th>
             <h1>
                Times de Futebol
             </h1>
          </th>
       </tr>
    `;

    let timesOrdenados = [...timesDeFutebol].sort();
    let timesHtml = timesOrdenados.map(transformar);
    tbody.innerHTML = `${timesHtml.join("\n")}`;

    document.getElementById("botaoMostrarOrdenado").style.display = "none";
    document.getElementById("botaoCarregar").style.display = "none";
}

function embaralharTimes() {
    let thead = document.getElementById("tabela-times").querySelector("thead");
    let tbody = document.getElementById("tabela-times").querySelector("tbody");

    thead.innerHTML = `
       <tr>
          <th>
             <h1>
                Times de Futebol
             </h1>
          </th>
       </tr>
    `;

    let timesEmbaralhados = [...timesDeFutebol].sort(() => Math.random() - 0.5);
    let timesHtml = timesEmbaralhados.map(transformar);
    tbody.innerHTML = `${timesHtml.join("\n")}`;

    document.getElementById("botaoMostrarOrdenado").style.display = "none";
    document.getElementById("botaoCarregar").style.display = "none";
}

document.getElementById("botaoCarregar").addEventListener("click", carregarTimes); 
document.getElementById("botaoMostrarOrdenado").addEventListener("click", mostrarOrdenadamente);
document.getElementById("botaoEmbaralhar").addEventListener("click", embaralharTimes);
