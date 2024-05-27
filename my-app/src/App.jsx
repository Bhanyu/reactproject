// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieSearch from './pages/MovieSearch';
import WatchList from './pages/WatchList';
import Basket from './pages/Basket'; // Update the import path
import "./App.css";
import SinglePage from './pages/SinglePage';

function App() {
    const [watchList, setWatchList] = useState([]);
    const [basket, setBasket] = useState([]);

    const addToWatchList = (movie) => {
        setWatchList(prevList => [...prevList, movie]);
    };

    const addToBasket = (movie) => {
        setBasket(prevBasket => [...prevBasket, movie]);
    };
    const removeFromWatchList = (index) => {
        setWatchList(prevList => prevList.filter((_, i) => i !== index));
    };
    const removeFromBasket = (index) => {
        setBasket(prevBasket => prevBasket.filter((_, i) => i !== index));
    };
    return (
        <Router>
            <div className="App">
           

                <Routes>
                    <Route path="/" element={
                        <div className="container">
                           <div className="movies"> <MovieSearch addToWatchList={addToWatchList} /></div>
                           <div className="watch"> <WatchList watchList={watchList} addToBasket={addToBasket}  removeFromWatchList={removeFromWatchList}  /></div>
                        </div>
                    } />
                    <Route path="/basket" element={<Basket basket={basket} removeFromBasket={removeFromBasket} />} /> 
                    <Route path="/movie/:imdbID" element={<SinglePage/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;







    








