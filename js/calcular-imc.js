var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdIMC = paciente.querySelector(".info-imc");

  pesoEsValido = true;
  alturaEsValda = true;

  if (peso < 0 || peso > 1000) {
    console.log("Peso incorrecto");
    tdIMC.textContent = "Peso incorrecto";
    pesoEsValido = false;
    paciente.classList.add("paciente-incorrecto");
  }
  if (altura < 0 || altura > 4) {
    console.log("Altura incorrecto");
    tdIMC.textContent = "Altura incorrecta";
    alturaEsValda = false;
    paciente.classList.add("paciente-incorrecto");
  }

  if (pesoEsValido && alturaEsValda) {
    tdIMC.textContent = calcularIMC(peso, altura);
    // console.log(imc);
  }
}

function calcularIMC(peso, altura) {
  var imc = peso / (altura * altura);
  return (imc = imc.toFixed(2));
}
