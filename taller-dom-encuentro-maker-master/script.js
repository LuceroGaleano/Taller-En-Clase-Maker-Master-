// 🎪 Encuentro Maker Medellín 2026
// Aquí vive toda la lógica del formulario.
// Arranca leyendo los dos ejemplos resueltos. Ese es el patrón. 👇


// ✅ RESUELTO 1: mostrar u ocultar los datos de facturación

const checkFactura = document.getElementById("requiere-factura");
const datosFactura = document.getElementById("datos-factura");

function alternarDatosFactura() {
  if (checkFactura.checked) {
    datosFactura.classList.remove("oculto");
  } else {
    datosFactura.classList.add("oculto");
  }
}

checkFactura.addEventListener("change", alternarDatosFactura);


// ✅ RESUELTO 2: envío del formulario y panel de confirmación

const formulario = document.getElementById("formulario-inscripcion");
const panelConfirmacion = document.getElementById("panel-confirmacion");
const confirmacionTexto = document.getElementById("confirmacion-texto");
const btnVolver = document.getElementById("btn-volver");

function enviarFormulario(evento) {
  evento.preventDefault();

  // 👀 Ojo: el valor se lee aquí adentro, no arriba. ¿Por qué?
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;

  confirmacionTexto.textContent =
    "Gracias " + nombre + ". Enviamos la confirmación al correo " + correo + ".";

  formulario.classList.add("oculto");
  panelConfirmacion.classList.remove("oculto");
}

function volverAlFormulario() {
  panelConfirmacion.classList.add("oculto");
  formulario.classList.remove("oculto");
}

formulario.addEventListener("submit", enviarFormulario);
btnVolver.addEventListener("click", volverAlFormulario);


// ✍️ FEATURE 1: contador de caracteres en observaciones
const campoObservaciones = document.getElementById("observaciones");
const contador = document.getElementById("contadorObservaciones");

campoObservaciones.maxLength = 200;

function actualizarContador(){
  const tamañoObservaciones = campoObservaciones.value.length;
  contador.textContent = tamañoObservaciones + "/200";

  //Removemos las clases del contador para poder insertar nuevas
  contador.classList.remove("contador--alerta");
  contador.classList.remove("contador--limite");

  if(tamañoObservaciones >=150 && tamañoObservaciones <200){
    contador.classList.remove("contador--limite");
    contador.classList.add("contador--alerta");
  } else if(tamañoObservaciones == 200){
    contador.classList.remove("contador--alerta");
    contador.classList.add("contador--limite");
  }
}

campoObservaciones.addEventListener("input", actualizarContador);



// 📧 FEATURE 2: validación del correo electrónico
const campoCorreo = document.getElementById("correo");
const campoTextoValidacion = document.getElementById("validacionCorreo");


function validarCorreoElectronico(){
  const correoElectronico = campoCorreo.value;
  let validador = true;

  //Removemos las clases del campo para poder adiccionar
  campoCorreo.classList.remove("campo__control--valido");
  campoCorreo.classList.remove("campo__control--error");

  const partes = correoElectronico.split("@");
  //Validamos que si se haya dividido en dos, de lo contrario quiere decir que hay mas de un @
  if(partes.length == 2){
    const parteIzquierda = partes[0].trim();
    const parteDerecha = partes[1].trim();
    //Primero validamos que cada parte despues y antes del arroba no este vacia
    if(parteDerecha.length === 0 || parteIzquierda.length === 0){
      validador = false;
    }
    //Luego validamos que la parte derecha del arroba contenga el .
    if(!parteDerecha.includes(".")){
      validador = false;
    }
  } else{
    validador = false;
  }

  //Validamos que el correo no este vacio
  if(correoElectronico.length === 0){
    campoTextoValidacion.textContent = "El correo es obligatorio";
  } else{
    //Por ultimo validamos segun los filtros realizados el correo esta correcto o no
    if(validador === true){
      campoTextoValidacion.textContent = "";
      campoCorreo.classList.add("campo__control--valido");
    } else{
      campoTextoValidacion.textContent = "Escribe un correo valido, por ejemplo nombre@dominio.com";
      campoCorreo.classList.add("campo__control--error");
    }
  }
}

campoCorreo.addEventListener("blur", validarCorreoElectronico);


// 🎟️ FEATURE 3: límite de talleres seleccionables




// 💰 FEATURE 4: cálculo del total de la inscripción




// 👥 FEATURE 5: registro de acompañantes
