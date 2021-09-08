import '../css/menu.css';

const menu = document.querySelector('.menu-container');

export function menuContainer() {
  menu.innerHTML = `
    <div class="toggle-container">
      <a href="#">☰</a>
    </div>
    <ul class="menu-list">
     <li class="item"></li>
     <li class="item"></li>
     <li class="item"></li>
     <li class="item"></li>
     <li class="item"></li>
    </ul>
    <ul class="menu-icons">
      <li class="item"></li>
      <li class="item"></li>
      <li class="item"></li>
      <li class="item"></li>
      <li class="item"></li>
    </ul>
    <ul class="menu-social">
      <li class="social"></li>
      <li class="social"></li>
      <li class="social"></li>
      <li class="social"></li>
    </ul>  
`;
}
