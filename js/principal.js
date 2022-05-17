var paciente = document.querySelector("#primer-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

// console.log(paciente);
// console.log(tdPeso);
// console.log(peso);
// console.log(tdAltura);
// console.log(altura);
var tdIMC = paciente.querySelector(".info-imc");

pesoEsValido = true;
alturaEsValda = true;

if (peso < 0 || peso > 1000) {
  console.log("Peso incorrecto");
  tdIMC.textContent = "Peso incorrecto";
  pesoEsValido = false;
}
if (altura < 0 || altura > 4) {
  console.log("Altura incorrecto");
  tdIMC.textContent = "Altura incorrecta";
  alturaEsValda = false;
}

if (pesoEsValido && alturaEsValda) {
  var imc = peso / (altura * altura);
  tdIMC.textContent = imc;
  // console.log(imc);
}
