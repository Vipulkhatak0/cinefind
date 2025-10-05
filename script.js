document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DARK MODE TOGGLE FUNCTIONALITY ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-mode');
        updateToggleIcon(true);
    } else {
        updateToggleIcon(false);
    }

    // Toggle logic
    darkModeToggle.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateToggleIcon(isDark);
    });

    function updateToggleIcon(isDark) {
        darkModeToggle.innerHTML = isDark 
            ? '<i class="fas fa-sun"></i>' // Sun icon for light mode
            : '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
    }


    // --- 2. MOVIE CARD GENERATION (Simulated Data) ---
    const latestMoviesData = [
        // Added a 'link' property with a sample YouTube URL
        { 
            title: "PEED: Diljit Dosanjh ", 
            year: 2024, 
            rating: 9.1, 
            poster: "https://m.media-amazon.com/images/M/MV5BNjgwMTgyZjQtYzc0Zi00M2RiLThmNzItZGE0NGVmMjk2NzYyXkEyXkFqcGc@._V1_QL75_UY190_CR74,0,190,190_.jpg", 
            link: "https://youtu.be/cXUndHRKmXQ" 
        },
        { 
            title: "Nikka Zaildar-4", 
            year: 2025, 
            rating: 8.5, 
            poster: "nikka.jpg", 
            link: "https://hdmovie2.ooo/78732-nikka-zaildar-4.html" 
        },
     
        { 
            title: "idli-kadai",
            
            year: 2025, 
            rating: 7.8, 
            poster: "idli.jpg", 
            link: "https://hdmovie2.ooo/78705-idli-kadai.html" 
        },
        { 
            title: "kantara", 
            year: 2025, 
            rating: 9.5, 
            poster: "kantara.jpg", 
            link: "https://bollyflix.esq/kantara-a-legend-chapter-1-2025-hindi-movie/" 
        },
        { 
            title: "Last Stand", 
            year: 2023, 
            rating: 8.0, 
            poster: "movie5.jpg", 
            link: "https://www.youtube.com/watch?v=EXAMPLE_LAST" 
        },
    ];
    
    const trendingMoviesData = [
       
        { 
            title: "The Action Hero", 
            year: 2023, 
            rating: 7.2, 
            poster: "movie6.jpg",
            link: "https://www.youtube.com/watch?v=EXAMPLE4"
        },
        { 
            title: "Romantic Getaway", 
            year: 2022, 
            rating: 6.9, 
            poster: "movie7.jpg",
            link: "https://www.youtube.com/watch?v=EXAMPLE5"
        },
        { 
            title: "Haunted Mansion", 
            year: 2024, 
            rating: 8.8, 
            poster: "movie8.jpg", 
            link: "https://www.youtube.com/watch?v=EXAMPLE_HORROR" 
        },
        { 
            title: "Laugh Riot", 
            year: 2023, 
            rating: 7.5, 
            poster: "movie9.jpg", 
            link: "https://www.youtube.com/watch?v=EXAMPLE_COMEDY" 
        },
        { 
            title: "Deep Space", 
            year: 2024, 
            rating: 9.2, 
            poster: "movie10.jpg", 
            link: "https://www.youtube.com/watch?v=EXAMPLE_SCIFI" 
        },
    ];
function createMovieCard(movie) {
    return `
        <div class="movie-card">
            <div class="card-poster">
                <img src="${movie.poster}" alt="${movie.title} Poster">
                <span class="card-rating"><i class="fas fa-star"></i> ${movie.rating}</span>
            </div>
            <div class="card-details">
                <h3>${movie.title}</h3>
                <p>${movie.year}</p>
                <a href="${movie.link}" target="_blank" class="direct-link-btn">
                    Direct Link <i class="fab fa-youtube"></i>
                </a>
            </div>
        </div>
    `;
}


    function renderMovies(data, targetElementId) {
        const targetElement = document.getElementById(targetElementId);
        if (targetElement) {
            targetElement.innerHTML = data.map(createMovieCard).join('');
        }
    }

   
    renderMovies(latestMoviesData, 'latest-movies-grid');
    renderMovies(trendingMoviesData, 'all-movies-grid');
});