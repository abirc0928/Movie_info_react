// Check for saved dark mode preference or system preference
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
}
// Listen for dark mode toggle
document
  .getElementById("darkModeToggle")
  .addEventListener("click", function () {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  });

//  Write your JavaScript code here...
const searchResults = document.querySelector("#searchResults");
const movieInfo = document.querySelector("#movieInfo");
const showMovieDetails = (imdbID) => {
  movieInfo.innerHTML = "";
  fetch(`http://www.omdbapi.com/?apikey=e4727508&i=${imdbID}`)
    .then((response) => response.json())
    .then((movie) => {

      const posterSrc = movie.Poster === "N/A"
          ? "https://placehold.co/600x400/png"
          : movie.Poster;

      const movieCard = `
            <div class="glass-effect bg-gray-300 rounded-xl p-8 transform transition-all duration-500">
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="md:col-span-1">
                        <!-- Poster Image -->
                        <img src="${posterSrc}"
                            alt="${movie.Title}"
                            class="w-full rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300">

                        <div class="mt-6 grid grid-cols-2 gap-4">
                            <!-- IMDB Rating -->
                            <div class="glass-effect rounded-lg p-4 text-center bg-gray-400">
                                <div class="text-3xl font-bold text-blue-600">${movie.imdbRating}</div>
                                <div class="text-sm text-gray-100">IMDb</div>
                            </div>

                            <!-- Metascore -->

                            <div class="glass-effect rounded-lg p-4 text-center bg-gray-400">
                                <div class="text-3xl font-bold text-purple-600">${movie.Metascore}</div>
                                <div class="text-sm text-gray-100">Metascore</div>
                            </div>


                        </div>
                    </div>
                    <div class="md:col-span-2">
                        <!-- Movie Title -->
                        <h2 class="text-4xl font-bold mb-4">${movie.Title}
                            <!-- Movie Year -->
                            <span class="text-gray-400">${movie.Year}</span>
                        </h2>

                        <!-- Movie Genre  -->
                        <div class="flex flex-wrap gap-2 mb-6">
                        ${movie.Genre
          .split(",")
          .map((genre) => `<span class="px-3 py-1 rounded-full glass-effect text-sm bg-gray-400">${genre}</span>`)
          .join("")
        }
                            
                        </div>

                        <!-- Movie Plot -->
                        <p class="text-lg mb-6 leading-relaxed  text-gray-700 dark:text-gray-400">
                           ${movie.Plot}
                        </p>
                        <div class="grid grid-cols-2 gap-6">
                            <!-- Movie Director -->
                            <div>
                                <h3 class="font-semibold text-blue-400 mb-2 ">Director</h3>
                                <p class="text-gray-900 dark:text-gray-300">${movie.Director}</p>
                            </div>

                            <!-- Movie Cast -->
                            <div>
                                <h3 class="font-semibold text-blue-400 mb-2">Cast</h3>
                                <p class="text-gray-900 dark:text-gray-300">${movie.Actors}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

      movieInfo.innerHTML = movieCard;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
};

function showMovieInfo(movie, page = 1) {
  fetch(`//www.omdbapi.com/?apikey=e4727508&s=${movie}&page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.Search.forEach((movie) => {
        const posterSrc = movie.Poster === "N/A"
          ? "https://placehold.co/600x400/png"
          : movie.Poster;
        const movieCard = `
        <div class="movie-card glass-effect  rounded-xl overflow-hidden cursor-pointer hover:shadow-xl bg-gray-300" onclick="showMovieDetails('${movie.imdbID}')">
        <div class="aspect-[2/3] bg-gray-300 dark:bg-gray-800 relative overflow-hidden">
            <!-- Movie Poster -->
            <img src="${posterSrc}"
                alt="${movie.Title}"
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-300">
        </div>
        <div class="p-4">
            <!-- Movie Title -->
            <h3 class="font-semibold text-gray-900 dark:text-white line-clamp-1">${movie.Title}</h3>
            <!-- Movie Year -->
            <p class="text-sm text-gray-600 dark:text-gray-400">${movie.Year}</p>
        </div>
    </div>`;

        searchResults.innerHTML += movieCard;
      });
    });
}
let conter = 1

function home() {
  window.location.reload();
}

document.querySelector("#searchInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (e.target.value != "") {
      searchResults.innerHTML = "";
      movieInfo.innerHTML = "";
      conter = 1
      showMovieInfo(e.target.value, conter);
    } else {
      window.location.reload();
    }
  }
});

document.querySelector("#searchButton").addEventListener("click", (e) => {
  console.log("clicked");
  const searchInput = document.querySelector("#searchInput");
  if (searchInput.value != "") {
    movieInfo.innerHTML = "";
    conter += 1
    showMovieInfo(searchInput.value, conter);
  } else {
    window.location.reload();
  }
});
