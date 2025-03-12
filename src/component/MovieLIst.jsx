import React, { useEffect, useState } from 'react';
import myaxios from "../utils/myaxios";

const MovieList = ({ movieName,page }) => {
    const [data, setData] = useState({ Search: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // Start loading before the request
        myaxios.get(`&s=${movieName}&page=${page}`)
            .then((response) => {
                setData((prevData) => ({
                    ...response.data,
                    Search: page === 1 ? response.data.Search : [...prevData.Search, ...response.data.Search],
                }));
                setLoading(false);
            })
            .catch(() => setLoading(false)); // Stop loading on error
    }, [page]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
            {data.Search.length ? (
                data.Search.map((movie, index) => (
                    <div key={index} className="movie-card">
                        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/600x400"} alt={movie.Title} />
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </div>
                ))
            ) : (
                <div>No Data</div>
            )}
        </div>
    );
};

export default MovieList;
