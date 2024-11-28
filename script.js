function goToLink(event, url) {
    if (event.type === 'click' || (event.type === 'keydown' && (event.key === 'Enter' || event.key === ' '))) {
      if (url.startsWith('#')) {
        document.querySelector(url).scrollIntoView({ behavior: 'smooth' });
      } else {
        window.open(url, '_blank');
      }
    }
  }

const movies = [
    {
        id: 1,
        title: "Inception",
        image: "images/inception.webp",
        description: "Un ladrón especializado en robar secretos de los sueños acepta implantar una idea en la mente de su objetivo, enfrentándose a los peligros de la mente subconsciente.",
        trailer: "https://www.youtube.com/embed/Nj_aSTfhUyM"
    },
    {
        id: 2,
        title: "The Dark Knight",
        image: "images/the-dark-knight.webp",
        description: "Batman enfrenta al caótico Joker, un enemigo que pone a prueba sus límites y amenaza con desestabilizar Gotham en esta emocionante obra de Christopher Nolan.",
        trailer: "https://www.youtube.com/embed/R6phtZUh9sc"
    },
    {
        id: 3,
        title: "Interstellar",
        image: "images/interstellar.webp",
        description: "Un grupo de exploradores viaja a través de un agujero de gusano para buscar un nuevo hogar para la humanidad en una épica aventura de ciencia ficción.",
        trailer: "https://www.youtube.com/embed/r6NQw3dtIUQ"
    },
    {
        id: 4,
        title: "The Matrix",
        image: "images/matrix.webp",
        description: "Un programador descubre la verdad sobre su realidad y lidera una rebelión contra un sistema de inteligencia artificial que controla a la humanidad.",
        trailer: "https://www.youtube.com/embed/jeJ1EDIfYEI"
    },
    {
        id: 5,
        title: "Pulp Fiction",
        image: "images/pulp-fiction.webp",
        description: "Historias entrelazadas de gánsteres, boxeadores y criminales en un clásico de Quentin Tarantino lleno de humor oscuro y diálogos inolvidables.",
        trailer: "https://www.youtube.com/embed/ZRkbkh5VAis"
    },
    {
        id: 6,
        title: "Venom",
        image: "images/venom.webp",
        description: "El periodista Eddie Brock se convierte en anfitrión de un simbionte alienígena que le da una violenta contraparte conocida como Venom, generando poderes increíbles mientras lucha contra enemigos que quieren controlar al simbionte.",
        trailer: "https://www.youtube.com/embed/2_bwYRRqPcs"
    }
];

function loadMovies() {
    const container = document.getElementById('moviesContainer');
    
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="" onerror="this.src='images/placeholder.jpg'">
            <div class="movie-title" style="font-weight: bold;">${movie.title}</div>
        `;
        
        movieCard.addEventListener('click', () => {
            localStorage.setItem('selectedMovie', JSON.stringify(movie));
            window.location.href = 'movie-details.html';
        });
        
        container.appendChild(movieCard);
    });
}

document.addEventListener('DOMContentLoaded', loadMovies);