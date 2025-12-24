import './style.css';
import { createHome } from './home.js';

const content = document.getElementById('content');
content.appendChild(createHome()); // shows Home by default