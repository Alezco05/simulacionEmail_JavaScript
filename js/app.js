// variables
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");
const formularioEnviar = document.getElementById("enviar-mail");
const resetBtn = document.getElementById("resetBtn");

// event Listener

eventListeners();

function eventListeners() {
  // Inicio de la aplicación y deshabilitar submit
  document.addEventListener("DOMContentLoaded", inicioApp);

  // Campos del formulario blur => escribir
  email.addEventListener("blur", validarCampo);
  asunto.addEventListener("blur", validarCampo);
  mensaje.addEventListener("blur", validarCampo);

  // Boton de enviar en el submit
  formularioEnviar.addEventListener("submit", enviarEmail);

  // Boton de reset
  resetBtn.addEventListener("click", resetFormulario);
}

// funciones

function inicioApp() {
  // desabilitar boton enviar
  btnEnviar.disabled = true;
}

//Valida que el campo tenga algo escrito
function validarCampo() {
  // Se valida que no este vacio
  validarLongitud(this);
  //Validar el email
  if (this.type === "email") validarEmail(this);
  if (email.value !== "" && asunto.value !== "" && mensaje.value !== "") {
    btnEnviar.disabled = false;
  }
}

function validarLongitud(campo) {
  if (campo.value.length > 0) {
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}
function validarEmail(email) {
  const mensaje = email.value;
  if (mensaje.indexOf("@") !== -1) {
    email.style.borderBottomColor = "green";
    email.classList.remove("error");
  } else {
    email.style.borderBottomColor = "red";
    email.classList.add("error");
  }
}
function enviarEmail(e) {
  e.preventDefault();
  // Spinner
  document.querySelector("#spinner").style.display = "block";
  // Gif envio email
  const enviado = document.createElement("img");
  enviado.src = "img/mail.gif";
  enviado.style.display = "block";
  // Ocultar Spinner y mostrar gif de enviado
  setTimeout(() => {
    document.querySelector("#spinner").style.display = "none";
    document.querySelector('#loaders').appendChild(enviado);
    setTimeout(() => {
     enviado.remove();
     formularioEnviar.reset();
    },5000)
  }, 3000);
}

function resetFormulario(e) {
     e.preventDefault();
     formularioEnviar.reset();
}
