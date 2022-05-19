var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

const linhas = document.querySelectorAll('table tbody tr') // linhas, imposibilita a tabela inteira ser removida
const colunas = document.querySelectorAll('table tbody tr td') // colunas, imposibilita a tabela inteira ser removida
const cabecalho = document.querySelectorAll('table thead tr th') // thead, imposibilita a tabela inteira ser removida

tabela.addEventListener("dblclick", function(event) {
    const elementoClicado = event.target

    if(elementoClicado != linhas && elementoClicado != colunas && elementoClicado != cabecalho){
        event.target.parentNode.classList.add("fadeOut");

        setTimeout(function() {
            event.target.parentNode.remove();
        }, 500); //faz a função remove aguardar 0,5s para dar para ver a animação
    }
});