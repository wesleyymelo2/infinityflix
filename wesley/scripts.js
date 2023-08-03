const submit = document.querySelector(".form-submit");
const input = document.querySelector(".form-input")

async function buscarFilme() {
    // Pegando o filme digitado
    const filme = input.value; 
    if (filme) {
        // Montando a URL de requisição
        const url = `http://www.omdbapi.com/?s=${filme}&apikey=b58710e2`;
        
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        }
        else {
            alert("Filme não encontrado!");
        }
    }
    else {
        alert("Digite um filme!");
    }
}

async function renderizarCatalogo(e) {
    e.preventDefault();
    let content = "";
    const listaFilmes = document.querySelector("#movies");
    const filmes = await buscarFilme();

    filmes.Search.forEach((filme) => {
        content += `<li class="app-movies-all-card">`;
        content += `<figure class="app-movies-all-figure">`;
        content += `<img class="app-movies-all-thumb" src=${filme.Poster}>`;
        content += `</figure>`;
        content += `<legend class="app-movies-all-legend">`;
        content += `<span class="app-movies-all-year">${filme.Year}</span>`;
        content += `<h2 class="app-movies-all-title">${filme.Title}</h2>`;
        content += `</legend>`;
        content += `</li>`;
    });
    // Inserindo a string no conteúdo da lista
    listaFilmes.innerHTML = content;
}



// Adicionando o evento de envio de formulário
submit.addEventListener("click", renderizarCatalogo);