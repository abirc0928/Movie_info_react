import axios from "axios";

const myaxios = axios.create({
    baseURL: "//www.omdbapi.com/?apikey=e4727508&",  // Removed the trailing '&' here
    headers: {
        "Content-Type": "application/json",
    },
});

export default myaxios;
