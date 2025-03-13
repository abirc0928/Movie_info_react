import React, { useEffect, useState } from "react";

const Header = ({ setMovieName, setPageCounter, setIsMovieDetailsActive }) => {

    // State to track dark mode
    const [darkMode, setDarkMode] = useState(
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    );

    // Apply theme on component mount
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    // Toggle theme
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header className="glass-effect sticky top-0 z-50 px-6 py-4 border-b border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                <h1
                    className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
                    onClick={() => {
                        setMovieName("batman");
                        setPageCounter(1);
                        setIsMovieDetailsActive(false);
                    }}
                >
                    MovieInfo
                </h1>

                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full hover:bg-white/10 transition-all"
                >
                    {/* Sun icon for dark mode */}
                    <svg
                        className={`w-6 h-6 ${darkMode ? "block" : "hidden"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        />
                    </svg>
                    {/* Moon icon for light mode */}
                    <svg
                        className={`w-6 h-6 ${darkMode ? "hidden" : "block"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
