// src/WatchList.js
import React from 'react';

const WatchList = ({ watchList, removeFromWatchList }) => {
    return (
        <div>
            <h1>Watch List</h1>
            <div>
                {watchList.map((movie) => (
                    <div key={movie.imdbID}>
                        <h2>{movie.Title}</h2>
                        <p>Year: {movie.Year}</p>
                        <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                        <button onClick={() => removeFromWatchList(movie.imdbID)}>Remove from Watch List</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WatchList;

