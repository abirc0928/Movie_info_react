import React from 'react'
import Header from '../component/Header'
import Searchbar from '../component/Searchbar'
import MovieDetails from '../component/MovieDetails'
import MovieLIst from '../component/MovieLIst'
import MovieSection from '../component/MovieSection'

const Layout = () => {
    return (
        <div className='bg-gradient-to-br from-slate-300 via-gray-200 to-slate-300  dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col transition-colors duration-300'>
            <Header />
            <MovieSection />
        </div>

    )
}

export default Layout