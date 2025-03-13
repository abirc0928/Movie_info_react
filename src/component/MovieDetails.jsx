import React, { useState, useEffect } from 'react';
import myaxios from "../utils/myaxios";

const MovieDetails = ({ imdbID }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        myaxios.get(`&i=${imdbID}`)  // This should work now as the base URL ends with the necessary `?`
            .then((response) => {
                console.log("a");
                setData(response.data);
                console.log('n');
            })
            .catch((error) => console.log(error));
    }, [imdbID]);

    console.log(imdbID);

    return (
        <div id="movieInfo" className="mt-8 mb-12 max-w-6xl mx-auto transform transition-all duration-500">
            <div className="glass-effect bg-gray-300 rounded-xl p-8 transform transition-all duration-500">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        {/* Poster Image */}
                        <img
                            src={data.Poster}
                            alt={data.Title}
                            className="w-full rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
                        />

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            {/* IMDB Rating */}
                            <div className="glass-effect rounded-lg p-4 text-center bg-gray-400">
                                <div className="text-3xl font-bold text-blue-600">{data.imdbRating}</div>
                                <div className="text-sm text-gray-100">IMDb</div>
                            </div>

                            {/* Metascore */}
                            <div className="glass-effect rounded-lg p-4 text-center bg-gray-400">
                                <div className="text-3xl font-bold text-purple-600">{data.Metascore}</div>
                                <div className="text-sm text-gray-100">Metascore</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        {/* Movie Title */}
                        <h2 className="text-4xl font-bold mb-4">
                            {data.Title} <span className="text-gray-400">{data.Year}</span>
                        </h2>

                        {/* Movie Genre */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {data.Genre && data.Genre.split(",").map((genre, index) => (
                                <span key={index} className="px-3 py-1 rounded-full glass-effect text-sm bg-gray-400">
                                    {genre.trim()}
                                </span>
                            ))}
                        </div>

                        {/* Movie Plot */}
                        <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-400">
                            {data.Plot}
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {/* Movie Director */}
                            <div>
                                <h3 className="font-semibold text-blue-400 mb-2">Director</h3>
                                <p className="text-gray-900 dark:text-gray-300">{data.Director}</p>
                            </div>

                            {/* Movie Cast */}
                            <div>
                                <h3 className="font-semibold text-blue-400 mb-2">Cast</h3>
                                <p className="text-gray-900 dark:text-gray-300">{data.Actors}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
