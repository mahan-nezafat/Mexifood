import React from 'react';

const Food = ({foodData}) => {
    return ( 
        <>
            <div className={foodData.soldOut ? 'food sold-out' : 'food'}>
                <img src={foodData.photoName} alt="food" />
                <div className="detail">
                    <h3>{foodData.name}</h3>
                    <p>{foodData.ingredients}</p>
                    <span>{foodData.soldOut ? 'SOLD OUT' : `$${foodData.price}`}</span>
                </div>
            </div>
        </>
    );
}
 
export default Food;