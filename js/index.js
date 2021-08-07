const toggle = document.querySelector('.toggle');
const navul = document.querySelector('.navbar');
const arraySections = [...document.querySelectorAll('section')];
let sectionActual = document.querySelector('section:not(.ocultar)');

function manejarEventos() {
  navul.addEventListener('click', (e) => {
    mostrarSection(e);
    cerrarMenuHamburguesa(e);
  });

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    navul.classList.toggle('open');
  });
}

function mostrarSection(e) {
  if (e.target.id === 'navbar-educacion') {
    manejarClases('educacion');
  } else if (e.target.id === 'navbar-habilidades') {
    manejarClases('habilidades');
  } else if (e.target.id === 'navbar-proyectos') {
    manejarClases('proyectos');
  } else if (e.target.id === 'navbar-sobremi') {
    manejarClases('sobre-mi');
  }
}

function manejarClases(cb) {
  const sectionSiguiente = document.querySelector(`#${cb}`);
  if (sectionActual === sectionSiguiente) {
    return;
  } else {
    efectoSalida(sectionActual);
    const filtro = arraySections.filter((valor) => valor.id != `${cb}`);

    setTimeout(() => {
      filtro.forEach((valor) => {
        valor.classList.add('ocultar');
        valor.classList.remove('animate__animated');
        valor.classList.remove('animate__backOutDown');
        valor.classList.remove('animate__backInUp');
        efectoEntrada(sectionSiguiente);
      });
      sectionActual = document.querySelector('section:not(.ocultar)');
    }, 800);
  }
}

function efectoEntrada(section) {
  section.classList.remove('ocultar');
  section.classList.add('animate__animated');
  section.classList.add('animate__backInUp');
}

function efectoSalida(section) {
  section.classList.add('animate__animated');
  section.classList.add('animate__backOutDown');
}

function cerrarMenuHamburguesa(e) {
  if (e.target.parentNode.className === 'nav-item' && e.target.parentNode.className != 'separador') {
    navul.classList.toggle('open');
  }
}

manejarEventos();
