
//Placeholder
function simpleTest() {
    alert('Ainda não temos página de início')
}

/* let title = document.querySelector('h1');
title.innerHTML = 'Capítulo 5 - Honestidade';
 */

// Spoiler warning button
function showPreview() {
    pContent.innerHTML = previewContent;
}
let pContent = document.getElementById('chapter-preview');

//TODO: the passage needs to come form somewhere, not writen in code
let previewContent = `
    <p>Era a mesma figura do vídeo. Dois braços, duas pernas, cabeça, cabelo… O torso era forte, o rosto era belo, os olhos eram… normais.</p>
    <p>Estava na porta da sala, como se tivesse vindo de elevador. Mas como passou pelos seguranças lá embaixo?</p>
    <p>Sua pele de mármore branco emanava uma névoa azul-celeste, que parecia deitar o corpo inteiro numa nuvem aconchegante. Seus cabelos ondulados e flutuantes que antes piscavam em várias cores, agora piscavam de branco para azul, para branco, e azul. Seus olhos eram serenos. A íris verde como esmeralda. A pupila arredondada. A atenção fixa nos quatro homens ao mesmo tempo, como uma ilusão de ótica.</p>
    <p>Sobre o corpo nu, apenas um manto vermelho, fino, porém eficaz, como se tivesse consciência própria do que precisava tampar.</p>
    <p>Se não estivesse exatamente na única passagem da sala para o elevador, Fipenarum juraria que aquela figura esteve ali desde sempre, desde a construção do prédio, desde o primeiro minuto da noite. Era uma estátua, não se mexia. A cabeleira ia para cima e para baixo timidamente e piscava em ritmo, mais parecendo um letreiro na parede do que algo vivo.
    <p>Seus lábios estavam cerrados, com um sorriso simpático, que em uma pessoa atrás de um balcão atendimento pareceria mecânico e obrigatório, mas naquela estátua branca era uma expressão de sinceridade absoluta. </p>
    <p>A sala foi consumida por um aroma de campos verdes, ar puro que dificilmente se encontra em cidades movimentadas.</p>
    <p>Conteúdo retirado do e-book "Justiça Cósmica, em: </p><a href="https://apoia.se/justicacosmica/contents/view/Capitulo-5-sTBXu7b9P?page=1#2">apoia.se/justicajosmica</a>
`;

//Simple function to insert content into tags
function exibitContent(tag, content){
    let field = document.querySelector(tag);
    field.innerHTML = content;
};

exibitContent('h1', 'Capítulo 5 - Honestidade');








/* let currentPage = 1;
let totalPages; // O número total de páginas do e-book será determinado dinamicamente após dividir o conteúdo em páginas
let paginas; // Array para armazenar o conteúdo dividido em páginas

document.getElementById('prev-page').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updatePageNumber();
    updateContent();
  }
});

document.getElementById('next-page').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePageNumber();
    updateContent();
  }
});

function updatePageNumber() {
  document.getElementById('page-number').textContent = currentPage + ' / ' + totalPages;
}

// Função para dividir o conteúdo em páginas com base no limite de palavras
function dividirConteudoEmPaginas(conteudo, limitePalavrasPorPagina) {
    const palavras = conteudo.split(' ');
    const paginas = [];
    let paginaAtual = [];

    palavras.forEach(palavra => {
        paginaAtual.push(palavra);
        if (paginaAtual.length >= limitePalavrasPorPagina) {
            paginas.push(paginaAtual.join(' '));
            paginaAtual = [];
        }
    });

    if (paginaAtual.length > 0) {
        paginas.push(paginaAtual.join(' '));
    }

    return paginas;
}

// Função para exibir o conteúdo da página atual
function exibirPaginaAtual(paginaAtual) {
    document.getElementById('ebook-content').textContent = paginaAtual;
}

// Função para carregar o conteúdo do PDF
function carregarConteudoPDF(url) {
    // Use PDF.js para carregar e processar o conteúdo do PDF
    return pdfjsLib.getDocument(url).promise
        .then(pdf => {
            const totalPages = pdf.numPages;
            const promises = [];

            for (let i = 1; i <= totalPages; i++) {
                promises.push(pdf.getPage(i).then(page => page.getTextContent()));
            }

            return Promise.all(promises);
        })
        .then(textContents => {
            // Concatena o conteúdo de todas as páginas do PDF em uma única string
            const conteudoPDF = textContents.map(content => content.items.map(item => item.str).join(' ')).join(' ');
            return conteudoPDF;
        });
}

// Função para atualizar o conteúdo do e-book
function updateContent() {
    // Verifica se a variável 'paginas' está definida
    if (typeof paginas !== 'undefined') {
        exibirPaginaAtual(paginas[currentPage - 1]);
    }
}

// URL do documento PDF
const urlDocumentoPDF = 'justica_cosmica_capitulo_01.pdf';

// Carrega o conteúdo do documento PDF e processa-o
carregarConteudoPDF(urlDocumentoPDF)
    .then(conteudoPDF => {
        // Aqui você pode processar o conteúdo do PDF conforme necessário
        // Por exemplo, você pode dividir o conteúdo em páginas com base em um limite de palavras
        const limitePalavrasPorPagina = 100;
        paginas = dividirConteudoEmPaginas(conteudoPDF, limitePalavrasPorPagina);
        totalPages = paginas.length;
        updatePageNumber();
        updateContent(); // Chama updateContent após o carregamento bem-sucedido do conteúdo
    })
    .catch(error => {
        console.error('Erro ao carregar o conteúdo do documento PDF:', error);
    });
 */