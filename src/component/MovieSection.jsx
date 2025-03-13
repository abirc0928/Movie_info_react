import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar';
import MovieDetails from './MovieDetails';
import MovieCard from './MovieCard';

const MovieSection = ({ pageCounter, setPageCounter, movieName, setMovieName, isMovieDetailsActive, setIsMovieDetailsActive, imdbID, setImdbID }) => {

    useEffect(() => {
        if (isMovieDetailsActive) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [isMovieDetailsActive, imdbID]);

    return (

        <main className="flex-grow container mx-auto p-4">
            <Searchbar setMovieName={setMovieName} setIsMovieDetailsActive={setIsMovieDetailsActive} />
            {isMovieDetailsActive ? <MovieDetails imdbID={imdbID} /> : ""}

            <MovieCard
                page={pageCounter}
                movieName={movieName}
                setIsMovieDetailsActive={setIsMovieDetailsActive}
                setImdbID={setImdbID}
            />

            <div className="flex justify-center mt-8 ">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
                    onClick={() => setPageCounter(pageCounter + 1)}
                >
                    Show more
                </button>
            </div>
        </main>
    );
};

export default MovieSection;
