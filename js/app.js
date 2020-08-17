//Variables

const carrito = document.getElementById("carrito");
const cursos = document.getElementById("lista-cursos");
const listaCursos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBoton = document.getElementById("vaciar-carrito");

//Event Listeners

cargarEventListeners();

function cargarEventListeners() {
  //Cuando se presiona agregar carrito
  cursos.addEventListener("click", comprarCurso);

  //Cuando se elimina un curso del carrito
  carrito.addEventListener("click", eliminarCurso);

  //Al vaciar el carrito
  vaciarCarritoBoton.addEventListener("click", vaciarCarrito);
}

//Funciones

//funcion que añade el curso al carrito
function comprarCurso(e) {
  e.preventDefault();

  //Delegation para agregar-carrito
  if (e.target.classList.contains("agregar-carrito")) {
    const curso = e.target.parentElement.parentElement;

    leerDatosCurso(curso);
  }
}

//Lee los  datos del curso
function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
  };

  insertarCarrito(infoCurso);
}

//Muestra curso seleccionado en el carrito

function insertarCarrito(curso) {
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>
    <img src = "${curso.imagen}" width=150>
  </td>
  <td>${curso.titulo}</td>
  <td>${curso.precio}</td>
  <td>
  <a href="#" class="borrar-curso data-id="${curso.id}" >X</a>
  </td>
  `;
  listaCursos.appendChild(row);
  guardarCursoLocalStorage(curso);
}

//Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
  e.preventDefault();
  let curso;
  if (e.target.classList.contains("borrar-curso")) {
    e.target.parentElement.parentElement.remove();
  }
}

//Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
  while (listaCursos.firstChild) {
    listaCursos.removeChild(listaCursos.firstChild);
  }

  return false;
}

//Almacela cursos en el carrito a Local Storage

function guardarCursoLocalStorage(curso) {
  let cursos;

  //Toma el valor de un array con datos de LS o vacio
  cursos = obtenerCursosLocalStorage();

  //El curso seleccionado se agrega al array
  cursos.push(curso);

  localStorage.setItem("cursos", JSON.stringify(cursos));
}

//Comprueba que haya elementos en Local Storage
function obtenerCursosLocalStorage() {
  let cursosLs;

  //Comprobamos si hay algo en Local Storage
  if (localStorage.getItem("cursos") === null) {
    cursosLs = [];
  } else {
    cursosLs = JSON.parse(localStorage.getItem("cursos"));
  }
  return cursosLs;
}
