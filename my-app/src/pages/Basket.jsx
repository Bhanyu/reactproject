
import React from 'react';
import "./basket.css"


const Basket = ({ basket,removeFromBasket}) => {
   
    return (
        <div className="basket-container">
            <h1>Basket</h1>
            <div className="basket-list">
                {basket.map((movie,index) => (
                    <div className="basket-item" key={index}>
                        <h2>{movie.Title}</h2>
                      
                        <button className="delete" onClick={() => removeFromBasket(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Basket;





