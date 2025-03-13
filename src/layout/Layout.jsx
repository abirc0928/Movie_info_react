import React, {useState} from 'react'
import Header from '../component/Header'
import MovieSection from '../component/MovieSection'


const Layout = () => {
    const [pageCounter, setPageCounter] = useState(1);
    const [movieName, setMovieName] = useState('batman');
    const [isMovieDetailsActive, setIsMovieDetailsActive] = useState(false);
    const [imdbID, setImdbID] = useState();

    return (
        <div className='bg-gradient-to-br from-slate-300 via-gray-200 to-slate-300  dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col transition-colors duration-300'>
            <Header setPageCounter={setPageCounter} setMovieName={setMovieName} setIsMovieDetailsActive={setIsMovieDetailsActive} />

            <MovieSection pageCounter={pageCounter} setPageCounter={setPageCounter} movieName={movieName} setMovieName={setMovieName} isMovieDetailsActive={isMovieDetailsActive} setIsMovieDetailsActive={setIsMovieDetailsActive} imdbID={imdbID} setImdbID={setImdbID} />
        </div>

    )
}

export default Layout