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

function goToDescriptiveAudio(event) {
  if (event.type === 'click' || (event.type === 'keydown' && (event.key === 'Enter' || event.key === ' '))) {
    const movieData = JSON.parse(localStorage.getItem('selectedMovie'));

    if (movieData) {
      //Convertir el titulo de la pelicula a un nombre de archivo compatible
      const formattedTitle = movieData.title
        .replace(/\s+/g, '_') // Reemplazar espacios con guiones bajos
        .replace(/[^a-zA-Z0-9_]/g, '') // Eliminar caracteres especiales
        .toUpperCase(); // Convertir a mayúsculas
      
        const audioDescriptionUrl = `audio_description_${formattedTitle}.html`;

        //Verificar que el archivo exista antes de abrirlo
        fetch(audioDescriptionUrl)
          .then(response => {
            if (response.ok) {
              window.open(audioDescriptionUrl, '_blank');
            } else {
              alert('Lo sentimos, el audio descriptivo para esta película aún está en desarrollo.');
            }
          })
          .catch(() => {
            alert('Lo sentimos, el audio descriptivo para esta película aún está en desarrollo.');
          });
    }
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