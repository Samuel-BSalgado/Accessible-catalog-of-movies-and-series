function loadMovieDetails() {
  const movieData = JSON.parse(localStorage.getItem('selectedMovie'));
  
  if (movieData) {
      document.title = `${movieData.title} - Detalles`;
      document.getElementById('movieImage').src = movieData.image;
      document.getElementById('movieImage').alt = movieData.alt;
      document.getElementById('movieTitle').textContent = movieData.title;
      document.getElementById('movieDescription').textContent = movieData.description;
      document.getElementById('movieTrailer').src = movieData.trailer;
  } else {
      window.location.href = 'index.html';
  }
}

document.addEventListener('DOMContentLoaded', loadMovieDetails);