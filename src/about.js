export  function createAbout() {
  const content = document.getElementById('content');

  const text = document.createElement('h1');
  text.textContent = 'about page (coming soon)';

  content.appendChild(text);
}