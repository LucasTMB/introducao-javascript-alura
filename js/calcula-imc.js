var titulo = document.querySelector("#titulo-pagina");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

function calculaIMC(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

for ( var i = 0 ; i <= pacientes.length ; i++) {

    let paciente = pacientes[i];
    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;
    let tdImc = paciente.querySelector(".info-imc");
    //let cor = 'lightcoral'
    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        tdImc.textContent = "Peso inválido!"
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor = cor;
    } else if (!alturaEhValida){
        tdImc.textContent = "Altura inválida!"
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor = cor;
    } else {
        var imc = calculaIMC(peso, altura);
        tdImc.textContent = imc;
    }

}

function validaPeso(peso) {
    if (peso >= 0 && peso < 200) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}
