//Variables
const carrito = document.getElementById("carrito");
const listaCursos = document.getElementById("lista-cursos");

//Event Listeners
cargarEventListeners();

function cargarEventListeners() {
  //Dispara cuando se presiona agregar carrito
  listaCursos.addEventListener("click", comprarCurso);
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
  console.log(curso);
}
