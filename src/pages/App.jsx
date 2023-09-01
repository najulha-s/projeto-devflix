import { useEffect } from "react";
import { useState } from "react";

import logo from "../assets/devflixpgpc 2.png"
import searchIcon from "../assets/search.svg"

import "./App.css";
import MovieCard from "../components/movieCard/movieCard";
import Footer from "../components/footer/footer";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const apiKey = "1f5eda25";
    const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

    useEffect(() => {
        searchMovies("Batman");
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`);
        const data = await response.json();

        console.log(data);
        setMovies(data.Search)
    };

    const handleKeyPress = (e) => {
        e.key === "Enter" && searchMovies(searchTerm)
    }

    //    fetch(apiUrl)
    //    .then((response)=> response.json())
    //    .then((data)=> console.log(data));

    return (
        <div id="app">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="linkMenu">
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Séries</a></li>
                        <li><a href="#">Filmes</a></li>
                    </ul>
                </div>
                <div className="search">
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <ion-icon name="search-outline" size="large" onClick={() => searchMovies(searchTerm)} ></ion-icon>
                </div>
            </div>
                                                                                                                                                      

            <div className="h1tprt"><h1>Lançamentos</h1><ion-icon name="chevron-forward-outline"></ion-icon></div>
            {movies?.length > 0 ? (
                <div className="container"><section className="ladoalado">
                    {movies.map((movie) => (<MovieCard key={movie.imdbID} movies={movie} />))}</section>
                </div>
            ) : (
                <div className="empty">
                    <h2>Nnehum filme encontrado 🦈</h2>
                </div>
            )}

            <div className="h1tprt"><h1>Comédia</h1><ion-icon name="chevron-forward-outline"></ion-icon></div>
            {movies?.length > 0 ? (
                <div className="container"><section className="ladoalado">
                    {movies.map((movie) => (<MovieCard key={movie.imdbID} movies={movie} />))}</section>
                </div>
            ) : (
                <div className="empty">
                    <h2>Nnehum filme encontrado 🦈</h2>
                </div>
            )}

            <div className="h1tprt"><h1>Acão</h1><ion-icon name="chevron-forward-outline"></ion-icon></div>
            {movies?.length > 0 ? (
                <div className="container"><section className="ladoalado">
                    {movies.map((movie) => (<MovieCard key={movie.imdbID} movies={movie} />))}</section>
                </div>
            ) : (
                <div className="empty">
                    <h2>Nnehum filme encontrado 🦈</h2>
                </div>
            )}

            <Footer link={"https:github.com.br"}>GabsAlcaide</Footer>
        </div>
    )

}

export default App;