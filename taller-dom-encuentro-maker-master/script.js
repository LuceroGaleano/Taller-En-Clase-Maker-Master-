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
const campoGrupoTalleres = document.getElementById("grupo-talleres");
const contadorTalleres = document.getElementById("contadorTalleres");

function validarLimiteDeTalleres(){
  const camposSeleccionados = campoGrupoTalleres.querySelectorAll('input:checked');
  contadorTalleres.textContent = "Talleres seleccionados:" +  camposSeleccionados.length + "/2";

  const todosLosCampos = campoGrupoTalleres.querySelectorAll('input[name="taller"]');

  if(camposSeleccionados.length == 2){
    contadorTalleres.classList.add("contador--limite");
    todosLosCampos.forEach(function(campo){
      if (!campo.checked) {
        campo.disabled = true;
        campo.closest('.opcion').classList.add("opcion--bloqueada");
      }
    });
  } else{
    contadorTalleres.classList.remove("contador--limite");
    todosLosCampos.forEach(function(campo){
      campo.disabled = false;
      campo.closest('.opcion').classList.remove("opcion--bloqueada");
    });
  }
  
}

campoGrupoTalleres.addEventListener("change", validarLimiteDeTalleres);


// 💰 FEATURE 4: cálculo del total de la inscripción
const valorTotal = document.getElementById("valor-total");
const campoModalidades = document.getElementById("grupo-modalidad");
const campoServiciosAdicionales = document.getElementById("grupo-adicionales");

function guardarPrecioModalidad(){
  const modalidadElegida = campoModalidades.querySelector('input[name="modalidad"]:checked');
  const precioModalidad = Number(modalidadElegida.dataset.precio);
  return precioModalidad;
}

function guardarPrecioServiciosAdicionales(){
  const serviciosAdicionales = campoServiciosAdicionales.querySelectorAll('input[name="adicional"]:checked');
  let precioTotalServicio = 0;
  serviciosAdicionales.forEach(function(servicioSeleccionado){
    precioTotalServicio = precioTotalServicio + Number(servicioSeleccionado.dataset.precio);
  });
  return precioTotalServicio;
}

function mostrarPrecioTotal(){
  const total = guardarPrecioModalidad() + guardarPrecioServiciosAdicionales()
  valorTotal.textContent = "$" + total.toLocaleString("es-CO");
}

campoModalidades.addEventListener("change", mostrarPrecioTotal);
campoServiciosAdicionales.addEventListener("change", mostrarPrecioTotal);
mostrarPrecioTotal(); //Para cuando la pagina se recarge



// 👥 FEATURE 5: registro de acompañantes
const listaAcompañantes = document.getElementById("lista-acompanantes");
const botonAgregar = document.getElementById("btn-agregar-acompanante");
const advertenciaNombre = document.getElementById("advertencia-nombre-vacio");

function obtenerInformacionAcompañante(){
  const campoNombre = document.getElementById("acompanante-nombre");
  const campoParentesco = document.getElementById("acompanante-parentesco");

  const nombre = campoNombre.value;
  const parentesco = campoParentesco.value;
  const datos = [nombre,parentesco]

  campoNombre.value = "";
  campoParentesco.value = "familiar";

  return datos;
}

function validarLimiteAcompañantes(){
  if(listaAcompañantes.children.length === 4){
    botonAgregar.classList.add("opcion--bloqueada");
    botonAgregar.disabled = true;
  } else{
    botonAgregar.classList.remove("opcion--bloqueada");
    botonAgregar.disabled = false;
  }
}

function agregarAcompañanteLista(){
  const nuevo = obtenerInformacionAcompañante();

  advertenciaNombre.textContent = "";
  
  if(nuevo[0].trim() === ""){
    advertenciaNombre.textContent = "Escribe el nombre del acompañante";
  } else{
      const campoNuevoAcompañante = document.createElement("li");
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.classList.add("boton-mini");
      botonEliminar.addEventListener("click", function(){
          campoNuevoAcompañante.remove();
          validarLimiteAcompañantes();
      });

    campoNuevoAcompañante.textContent = "→ Nombre: " + nuevo[0] + " Parentesco: " + nuevo[1] + " ";
    campoNuevoAcompañante.appendChild(botonEliminar);

    listaAcompañantes.appendChild(campoNuevoAcompañante);
    validarLimiteAcompañantes();
  }
}


botonAgregar.addEventListener("click", agregarAcompañanteLista);

//Adicional ☑️: Terminos y condiciones
const opcionTerminos = document.getElementById("terminos");
const botonEnviar = document.getElementById("btn-enviar");
botonEnviar.classList.add("opcion--bloqueada");
botonEnviar.disabled = true;  

function validarTerminos(){
  if(opcionTerminos.checked){
    botonEnviar.classList.remove("opcion--bloqueada");
    botonEnviar.disabled = false;  
  } else{
    botonEnviar.classList.add("opcion--bloqueada");
    botonEnviar.disabled = true;  
  }
}


opcionTerminos.addEventListener("change", validarTerminos)