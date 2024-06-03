// script.js
const movieListUl = document.getElementById('movie-list-ul');
const movieDetailsP = document.getElementById('movie-details-p');

// Fetch movies from the backend API
fetch('https://your-backend-api.com/movies')
  .then(response => response.json())
  .then(data => {
    data.forEach((movie) => {
      const movieLi = document.createElement('li');
      movieLi.textContent = movie.title;
      movieListUl.appendChild(movieLi);
    });
  });

// Handle movie selection
movieListUl.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const movieId = event.target.textContent;
    fetch(`https://your-backend-api.com/movies/${movieId}`)
      .then(response => response.json())
      .then((movie) => {
        movieDetailsP.textContent = `Title: ${movie.title}\nYear: ${movie.year}`;
      });
  }
});