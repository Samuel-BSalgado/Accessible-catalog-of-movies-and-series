const movies = [
    {
        id: 1,
        title: "Inception",
        image: "images/inception.webp",
        description: "Un ladrón experto en el arte de la extracción de información durante el estado del sueño.",
        trailer: "https://www.youtube.com/embed/Nj_aSTfhUyM"
    },
    {
        id: 2,
        title: "The Dark Knight",
        image: "images/the-dark-knight.webp",
        description: "Batman se enfrenta al Joker en una batalla por el alma de Ciudad Gótica.",
        trailer: "https://www.youtube.com/embed/R6phtZUh9sc"
    },
    {
        id: 3,
        title: "Interstellar",
        image: "images/interstellar.webp",
        description: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
        trailer: "https://www.youtube.com/embed/r6NQw3dtIUQ"
    },
    {
        id: 4,
        title: "The Matrix",
        image: "images/matrix.webp",
        description: "Un hacker se da cuenta por medio de otros rebeldes de la naturaleza de su realidad y su rol en la guerra contra los controladores.",
        trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
    },
    {
        id: 5,
        title: "Pulp Fiction",
        image: "images/pulp-fiction.webp",
        description: "Varias historias interconectadas de criminales en Los Ángeles.",
        trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY"
    },
    {
        id: 6,
        title: "Venom",
        image: "images/venom.webp",
        description: "El periodista Eddie Brock desarrolla superpoderes después de ser vinculado con un simbionte alienígena que le da una violenta contraparte conocida como Venom.",
        trailer: "https://www.youtube.com/embed/2_bwYRRqPcs"
    }
];

function loadMovies() {
    const container = document.getElementById('moviesContainer');
    
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" onerror="this.src='images/placeholder.jpg'">
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