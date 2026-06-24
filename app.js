const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputEdad = document.getElementById("edad");
const inputAltura = document.getElementById("altura");
const inputPeso = document.getElementById("peso");
const tabla = document.getElementById("tabla");

const personas = [];

function renderTabla() {
  tabla.innerHTML = "";

  personas.forEach(({ nombre, apellido, edad, altura, peso, imc }) => {
    const fila = document.createElement("tr");

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombre;
    const celdaApellido = document.createElement("td");
    celdaApellido.textContent = apellido;
    const celdaEdad = document.createElement("td");
    celdaEdad.textContent = edad;
    const celdaAltura = document.createElement("td");
    celdaAltura.textContent = altura;
    const celdaPeso = document.createElement("td");
    celdaPeso.textContent = peso;
    const celdaImc = document.createElement("td");
    celdaImc.textContent = imc;
    const btnEliminar = document.createElement("button");
    btnEliminar.id = "btn2";
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      const index = personas.findIndex(
        (persona) =>
          persona.nombre === nombre &&
          persona.apellido === apellido &&
          persona.edad === edad &&
          persona.altura === altura &&
          persona.peso === peso &&
          persona.imc === imc,
      );
      if (index !== -1) {
        personas.splice(index, 1);
        renderTabla();
      }
    });

    fila.append(
      celdaNombre,
      celdaApellido,
      celdaEdad,
      celdaAltura,
      celdaPeso,
      celdaImc,
      btnEliminar,
    );
    tabla.appendChild(fila);
  });
}
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtengo valores de formulario
  const nombre = inputNombre.value.trim();
  const apellido = inputApellido.value.trim();
  const edad = inputEdad.value.trim();
  const altura = inputAltura.value.trim();
  const peso = inputPeso.value.trim();

  //Calcular IMC
  const imc = (peso / ((altura / 100) * (altura / 100))).toFixed(2);
  // Validacion: No permitir cargar datos vacíos
  if (
    nombre === "" ||
    apellido === "" ||
    edad === "" ||
    altura === "" ||
    peso === ""
  ) {
    return;
  }

  personas.push({ nombre, apellido, edad, altura, peso, imc });
  renderTabla();
  formulario.reset();
  inputNombre.focus();
});

// Mostrar arreglo pre-cargado
renderTabla();
