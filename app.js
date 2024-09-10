function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    //se o campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum Autor Encontrado. Você precisa buscar por um autor ou livro</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = "";
    let descrição = "";
    let tags ="";


    // Itera sobre cada item (dado) na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()
   
        // se titulo includes campoPesquisa 
       if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa)|| tags.includes
       (campoPesquisa)) {
         // Cria um novo elemento HTML para cada resultado, formatando o título, descrição e link
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a> 
                </h2>
                <p class="descrição-meta">${dado.descrição}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
       }
    }

    if (!resultados){
        resultados = "<p>nenhum autor foi encontrado</p>"
    }
  
    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;
}




