import './style.css';
import { createHome } from './home.js';
import { createMenu } from './menu.js';
import { createAbout } from './about.js';

const content = document.getElementById('content');

// Render Home once when the website loads 
createHome();

//clear
function clearContent() {
  content.innerHTML = '';
}

// buttons
document.getElementById('home').addEventListener('click', () => {
  clearContent();
  createHome();
});

document.getElementById('menu').addEventListener('click', () => {
  clearContent();
  createMenu();
});

document.getElementById('aboutus').addEventListener('click', () => {
  clearContent();
  createAbout();
});