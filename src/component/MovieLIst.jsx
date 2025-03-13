import React, { useEffect, useState } from "react";
import myaxios from "../utils/myaxios";

const MovieList = ({ movieName, page, setIsMovieDetailsActive, setImdbID }) => {
    const [movies, setMovies] = useState([]); // Store movie list
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        myaxios.get(`&s=${movieName}&page=${page}`)
            .then((response) => {
                const newMovies = response.data.Search || []; // Check if 'Search' exists in the response

                setMovies((prevMovies) => {
                    const existingIds = new Set(prevMovies.map((movie) => movie.imdbID));
                    const filteredMovies = newMovies.filter((movie) => !existingIds.has(movie.imdbID));
                    return page === 1 ? newMovies : [...prevMovies, ...filteredMovies]; 
                });

                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [page, movieName]);

    if (loading && page === 1) return <div>Loading...</div>;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8 ">
            {movies.length ? (
                movies.map((movie) => (
                    <div key={movie.imdbID} className="movie-card glass-effect rounded-xl overflow-hidden cursor-pointer hover:shadow-xl bg-gray-300 " onClick={() => {
                        setIsMovieDetailsActive(true)
                        setImdbID(movie.imdbID)
                    }}>
                        <div className="aspect-[2/3] bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                            <img 
                                src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/600x400"} 
                                alt={movie.Title} 
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                            />
                        </div>

                        <div className="p-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-1">{movie.Title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{movie.Year}</p>
                        </div>
                    </div>
                ))
            ) : (
                <div>No Data</div>
            )}
        </div>
    );
};

export default MovieList;
