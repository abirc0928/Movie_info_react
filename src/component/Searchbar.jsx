import React from 'react'

const Searchbar = () => {
    return (
        <div className="max-w-4xl mx-auto text-center py-12">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Discover Movies
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Explore thousands of movies with detailed information
            </p>
            <div className="relative max-w-2xl mx-auto">
                <input
                    id="searchInput"
                    type="text"
                    className="w-full p-4 pl-6 pr-24 text-lg rounded-full glass-effect text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/50 dark:bg-black/20 shadow-xl"
                    placeholder="Search for movies..."
                />
                <div id="searchSpinner" className="absolute right-20 top-5 hidden">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar