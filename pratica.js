var pacientes = document.querySelectorAll(".paciente")

var tdAltura = pacientes.querySelector("info-altura");
var altura = tdAltura.textContent;

var tdPeso = pacientes.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdimc = pacientes.querySelector(".info-imc");

alturaehfalsa = true;
pesoehfalso = true;


if (altura <=0 || altura >=100) {
  alturaehfalsa = false;
  tdimc.textContent = "altura invalida";

}

if (peso <=0 || peso >=100) {
  pesoehfalso = false;
  tdimc.textContent = "peso invalida";

}

if (alturaehfalsa && pesoehfalso ) {
  var imc = altura / (peso * peso)
  tdimc.textContent = imc.toFixed(2);
}
