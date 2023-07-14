window.onload = inicio;
var btnGuardarCliente = document.getElementById("btnGuardarCliente");
var cliente = {};
var clientes = [];
var clientes = JSON.parse(localStorage.getItem("nnn")) || [];

function inicio() {
  btnGuardarCliente.addEventListener("click", guardar);
  cargarSocios();
}

function guardar() {
  var cliente = {};
  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var direccion = document.getElementById("direccion");
  var email = document.getElementById("email");
  var categoria = document.getElementById("categoria");

  cliente.nombre = nombre.value;
  cliente.apellido = apellido.value;
  cliente.direccion = direccion.value;
  cliente.email = email.value;
  cliente.categoria = categoria.value;

  nombre.value = "";
  apellido.value = "";
  direccion.value = "";
  email.value = "";
  categoria.value = "";

  clientes.push(cliente);

  localStorage.setItem("nnn", JSON.stringify(clientes));
  cargarSocios();
}

var categorias = {
  1: "Cadete",
  2: "Socio Pleno",
  3: "Adherente",
};

function cargarSocios() {
  var tablaSocios = document.getElementById("tablaSocios");
  tablaSocios.innerHTML = "";

  for (var i = 0; i < clientes.length; i++) {
    var cliente = clientes[i];

    var fila = document.createElement("tr");

    var celdaNombre = document.createElement("td");
    celdaNombre.textContent = cliente.nombre;
    fila.appendChild(celdaNombre);

    var celdaApellido = document.createElement("td");
    celdaApellido.textContent = cliente.apellido;
    fila.appendChild(celdaApellido);

    var celdaCategoria = document.createElement("td");
    celdaCategoria.textContent = categorias[cliente.categoria];
    fila.appendChild(celdaCategoria);

    var celdaEditar = document.createElement("td");
    var botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.classList.add("btn");
    botonEditar.classList.add("btn-light");
    botonEditar.addEventListener("click", function () {
      editarSocio(i);
    });
    celdaEditar.appendChild(botonEditar);
    fila.appendChild(celdaEditar);

    var celdaEliminar = document.createElement("td");
    var botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("btn");
    botonEliminar.classList.add("btn-danger");
    botonEliminar.addEventListener("click", () => {
      borrarCliente(i);
    });
    celdaEliminar.appendChild(botonEliminar);
    fila.appendChild(celdaEliminar);

    tablaSocios.appendChild(fila);
  }
}

function borrarCliente(indice) {
  clientes.splice(indice, 1);
  localStorage.setItem("nnn", JSON.stringify(clientes));
  cargarSocios();
}
