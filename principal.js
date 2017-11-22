// Aula 01-----------------------------------------------------------------//
var titulo = document.querySelector(".titulo");
titulo.textContent = "NutNut";

// Aula 02-----------------------------------------------------------------//


var pacientes = document.querySelectorAll(".paciente");  //seleciona tudo que esta na classe "pacientes". -queryselectorall

for(var i = 0; i < pacientes.length ; i++){  //este bloco faz o calculo para todos os pacientes. length conta qtos clientes tem na classe paciente.
    console.log(pacientes[i]);

    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdimc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 0 || peso >= 1000){
        pesoEhValido = false;
        tdimc.textContent = "Peso invalido!";
        paciente.classList.add("paciente-invalido"); //"selecionei a classe paciente e classlist" adiciona uma classe
    }

    if (altura <= 0 || altura >= 3.00){
        alturaEhValida = false;
        tdimc.textContent = "Altura invalida!";
        paciente.classList.add("paciente-invalido"); //"selecionei a classe paciente e classlist" adiciona uma classe
    }

    if( alturaEhValida && pesoEhValido){
        var imc = peso / (altura * altura);
        tdimc.textContent = imc.toFixed(2);
    }
}


//aula 04

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){  //para executar o event, cloca-la dentro do parametro
  event.preventDefault();  //previne o refresh da pagina


  var form = document.querySelector("#form-adiciona"); //pegando dados do formulario

  var nome = form.nome.value;         //pegando os dados que inseri no formulario
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;   //imprimindo os dados do formulario, pegamos esses dados!

  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td")    //criando uma tr pelo javascript
  var pesoTd = document.createElement("td")
  var alturaTd = document.createElement("td")
  var gorduraTd = document.createElement("td")
  var imcTd = document.createElement("td")
  //CRIADO!!!!

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;           //recebendo os "values" ali de cima, no element criado


  pacienteTr.appendChild(nomeTd);      //colocando na minha var "pacienteTr" ,"coloque como filho" os nome, altura td.....
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);          //tabela, coloca dentro de vc o append child que acabei de criar

});
