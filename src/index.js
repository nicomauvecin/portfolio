import './style.css';
import img from './assets/rocko.jpg';
console.log('hola');

const col = document.querySelector('.col');
col.innerHTML = `
<img src="${img}">
`;
