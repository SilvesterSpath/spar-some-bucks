const button = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

function navToggle() {
  button.classList.toggle('open');
  menu.classList.toggle('hidden');
}

button.addEventListener('click', navToggle);
