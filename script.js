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
        alt: "Tótem girando en su propio eje en un fondo color rojo",
        image: "images/inception.webp",
        description: "Un ladrón especializado en robar secretos de los sueños acepta implantar una idea en la mente de su objetivo, enfrentándose a los peligros de la mente subconsciente.",
        trailer: "https://www.youtube.com/embed/Nj_aSTfhUyM"
    },
    {
        id: 2,
        title: "The Dark Knight",
        alt: "Batman mirando estóicamente hacia el frente, con un edificio detrás de él, incendiado con el característico símbolo del murciélago",
        image: "images/the-dark-knight.webp",
        description: "Batman enfrenta al caótico Joker, un enemigo que pone a prueba sus límites y amenaza con desestabilizar Gotham en esta emocionante obra de Christopher Nolan.",
        trailer: "https://www.youtube.com/embed/R6phtZUh9sc"
    },
    {
        id: 3,
        title: "Interstellar",
        alt: "3 astronautas varados en un planeta enteramente compuesto de aguas poco profundas, con su nave espacial flotando detrás de ellos",
        image: "images/interstellar.webp",
        description: "Un grupo de exploradores viaja a través de un agujero de gusano para buscar un nuevo hogar para la humanidad en una épica aventura de ciencia ficción.",
        trailer: "https://www.youtube.com/embed/r6NQw3dtIUQ"
    },
    {
        id: 4,
        title: "The Matrix",
        alt: "4 rebeldes armados vestidos de negro con lentes oscuros, con un filtro verde y símbolos desconocidos de aspecto hacker, simulando una falla en la programación de su realidad",
        image: "images/matrix.webp",
        description: "Un programador descubre la verdad sobre su realidad y lidera una rebelión contra un sistema de inteligencia artificial que controla a la humanidad.",
        trailer: "https://www.youtube.com/embed/jeJ1EDIfYEI"
    },
    {
        id: 5,
        title: "Pulp Fiction",
        alt: "Mujer de cabello negro corto, con tupé, collar, blusa y falda negra de los noventas, con un cigarro en la mano derecha, acostada de frente en una cama, con un cojín y una pistola bajo su pecho, y tomando un libro con la mano izquierda, con las piernas elevadas y cruzadas, mirando seriamente a la cámara",
        image: "images/pulp-fiction.webp",
        description: "Historias entrelazadas de gánsteres, boxeadores y criminales en un clásico de Quentin Tarantino lleno de humor oscuro y diálogos inolvidables.",
        trailer: "https://www.youtube.com/embed/ZRkbkh5VAis"
    },
    {
        id: 6,
        title: "Venom",
        alt: "Protagonista viendo fijamente a la cámara, con el simbionte alienígena ocupando la mitad de su rostro a media transformación",
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
            <div role="link" tabindex="0" class="movie-title" style="font-weight: bold;">${movie.title}</div>
        `;
        
        movieCard.addEventListener('click', () => {
            localStorage.setItem('selectedMovie', JSON.stringify(movie));
            window.location.href = 'movie-details.html';
        });
        
        container.appendChild(movieCard);
    });
}

document.addEventListener('DOMContentLoaded', loadMovies);