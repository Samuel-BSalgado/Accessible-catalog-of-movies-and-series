function goToLink(event, url) {
  if (event.type === 'click' || (event.type === 'keydown' && (event.key === 'Enter' || event.key === ' '))) {
    if (url.startsWith('#')) {
      document.querySelector(url).scrollIntoView({ behavior: 'smooth' });
    } else if (url.includes('.html#')) {
      const [page, section] = url.split('#');
      window.location.href = `${page}#${section}`;
    } else {
      window.open(url, '_blank');
    }
  }
}

function goToDescriptiveAudio(event, url) {
  if (event.type === 'click' || (event.type === 'keydown' && (event.key === 'Enter' || event.key === ' '))) {
    window.open(url, '_blank');
  }
}

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