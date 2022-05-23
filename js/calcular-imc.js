var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdIMC = paciente.querySelector(".info-imc");

  pesoEsValido = validarPeso(peso);
  alturaEsValida = validarAltura(altura);
  alturaEsValda = true;

  if (!pesoEsValido) {
    console.log("Peso incorrecto");
    tdIMC.textContent = "Peso incorrecto";
    pesoEsValido = false;
    paciente.classList.add("paciente-incorrecto");
  }
  if (!alturaEsValida) {
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

function validarPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validarAltura(altura) {
  if (altura >= 0 && altura < 3.0) {
    return true;
  } else {
    return false;
  }
}
