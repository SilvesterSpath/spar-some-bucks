const button = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

function navToggle() {
  button.classList.toggle('open');
  menu.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}

button.addEventListener('click', navToggle);
