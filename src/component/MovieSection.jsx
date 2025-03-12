import React, { useState } from 'react'
import Searchbar from './Searchbar'
import MovieLIst from './MovieLIst'
import MovieDetails from './MovieDetails'

const MovieSection = () => {

    const [pageCounter, setPageCounter] = useState(1)
    const [movieName, setMovieName] = useState('batman')

    console.log(pageCounter)
    return (
        <main className="flex-grow container mx-auto p-4">
            <Searchbar />

            <MovieDetails />
            <div id="loadingIndicator" className="hidden text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            </div>

            <MovieLIst page={pageCounter} movieName={movieName}/>
            <div className="flex justify-center mt-8">
                <button id="searchButton" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={() => setPageCounter(pageCounter + 1)}>
                    Show more
                </button>
            </div>
        </main>
    )
}

export default MovieSection