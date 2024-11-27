let cervejas = [
    { name: "Guinness", alcohol: "10%", style: "Imperial Stout", ibu: "45" },
    { name: "Desperados", alcohol: "6%", style: "Lager", ibu: "20" },
    { name: "Becks", alcohol: "5%", style: "Pilsen", ibu: "25" },
    { name: "Corona", alcohol: "4.5%", style: "Pilsen", ibu: "18" },
    { name: "Budweiser", alcohol: "5%", style: "Lager", ibu: "15" },
    { name: "Skol", alcohol: "4.2%", style: "Pilsen", ibu: "12" },
    { name: "Heineken", alcohol: "5%", style: "Lager", ibu: "23" },
    { name: "Carlsberg", alcohol: "5%", style: "Pale Ale", ibu: "30" },
    { name: "Stella Artois", alcohol: "5.2%", style: "Belgian Pilsner", ibu: "24" },
    { name: "Amstel", alcohol: "4.6%", style: "Lager", ibu: "16" }
];

const carregarTabela = (
    data, 
    elementId = "cervejasDiv", 
    headers = ["Nome", "Álcool", "Estilo", "Amargor"], 
    properties = ["name", "alcohol", "style", "ibu"]
) => {
    const table = document.getElementById(elementId);
    const tbody = table.querySelector("tbody");

    const thead = table.querySelector("thead");
    thead.innerHTML = `<tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>`;

    const rowsHtml = data.map(item => 
        `<tr>${properties.map(prop => `<td>${item[prop] || "-"}</td>`).join('')}</tr>`
    );

    tbody.innerHTML = rowsHtml.join("\n");
};

let botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", () => carregarTabela(cervejas));

