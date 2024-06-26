
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../pages/list.css"
const WatchList = ({ watchList, addToBasket,removeFromWatchList}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSave = () => {
      
        if (inputValue.trim() !== '') {
            const movie = { Title: inputValue.trim() };
            addToBasket(movie);
            setInputValue('');
        }
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
                <button className='save' onClick={handleSave}>Save</button>
            </div>
            <ul>
                {watchList.map((movie, index) => (
                    <li className='list' key={index}>{movie.Title}
                    <button className="deletebtn" onClick={() => removeFromWatchList(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Link to="/basket">
                <button className='gobasket'>Go to Basket</button>
            </Link>
        </div>
    );
};

export default WatchList;




