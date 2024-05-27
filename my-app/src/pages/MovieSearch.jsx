import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../pages/search.css";

const MovieSearch = ({ addToWatchList }) => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const apiUrl = "https://www.omdbapi.com/";
    const apiKey = "47bb27dc";

    useEffect(() => {
        if (query.length > 0) {
            setLoading(true);
            fetchMovies(query);
        } else {
            setMovies([]);
        }
    }, [query]);

    const fetchMovies = async (searchQuery) => {
        try {
            const response = await fetch(`${apiUrl}?s=${searchQuery}&apikey=${apiKey}`);
            const data = await response.json();
            setLoading(false);
            if (data.Response === "True") {
                setMovies(data.Search);
                setError('');
            } else {
                setError(data.Error);
                setMovies([]);
            }
        } catch (err) {
            setLoading(false);
            setError('An error occurred while fetching data.');
        }
    };

    return (
        <div className='allmovies'>
            <h1>Movie Search</h1>
            <input
                type="text"
                value={query}
                className="enter"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter movie title"
            />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className='movies'>
                {movies.map((movie) => (
                    <div className='movie' key={movie.imdbID}>
                        <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                        <h2>{movie.Title}</h2>
                        <p>Year: {movie.Year}</p>
                        <div className="addread">
                            <button className='add' onClick={() => addToWatchList(movie)}>Add to Watch List</button>
                            <Link className='read' to={`/movie/${movie.imdbID}`}>
                                <button className='readmore'>Read More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieSearch;










