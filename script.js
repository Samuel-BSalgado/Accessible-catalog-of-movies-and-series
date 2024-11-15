// Script básico para obtener información de los parámetros de URL
document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("movieId");

  if (movieId) {
      loadMovieDetails(movieId);
  }
});

function loadMovieDetails(id) {
  // Aquí puedes hacer una petición a una API o cargar datos locales
  // Por ejemplo, usando un objeto local simulado:
  const movies = {
      1: {
          title: "Película 1",
          description: "Esta es la descripción de Película 1.",
          image: "ruta/imagen1.jpg",
          trailer: "ruta/trailer1.mp4"
      },
      2: {
          title: "Película 2",
          description: "Esta es la descripción de Película 2.",
          image: "ruta/imagen2.jpg",
          trailer: "ruta/trailer2.mp4"
      }
  };

  const movie = movies[id];
  if (movie) {
      document.getElementById("movieTitle").textContent = movie.title;
      document.getElementById("movieDescription").textContent = movie.description;
      document.querySelector("img").src = movie.image;
      document.getElementById("trailer").querySelector("source").src = movie.trailer;
      document.getElementById("trailer").load();
  }
}
