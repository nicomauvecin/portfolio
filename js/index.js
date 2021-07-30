const toggle = document.querySelector('.toggle');
const navul = document.querySelector('.navbar');

toggle.addEventListener('click', (e) => {
  e.preventDefault();
  navul.classList.toggle('open');
});
