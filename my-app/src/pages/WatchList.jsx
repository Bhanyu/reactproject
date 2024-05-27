// WatchList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../pages/list.css"
const WatchList = ({ watchList, addToBasket,removeFromWatchList }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSave = () => {
        addToBasket({ Title: inputValue }); // Add the input value to the basket
        setInputValue(''); // Clear the input field after saving
    };

    return (
        <div className="watch-list">
            <h2>Watch List</h2>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter movie title"
                />
                <button onClick={handleSave}>Save</button>
            </div>
            <ul>
                {watchList.map((movie, index) => (
                    <li className='list' key={index}>{movie.Title}
                    <button className="delete" onClick={() => removeFromWatchList(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Link to="/basket">
                <button>Go to Basket</button>
            </Link>
        </div>
    );
};

export default WatchList;
















