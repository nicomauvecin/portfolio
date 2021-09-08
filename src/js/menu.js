import '../css/menu.css';

const header = document.querySelector('.header');

export function menuContainer() {
  header.innerHTML = `
    <div class="brand">
      <a href="#">
        <span><</span>
          NICO MAUVECIN
        <span>/></span>
      </a>
    </div>
    <nav class="menu">
      <ul>
        <li><a href="#">Sobre mi</a></li>
        <li><a href="#">Educación</a></li>
        <li><a href="#">Habilidades</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
    <div class="social">
      <ul>
        <li>
          <a href="#">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="far fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
`;
}
