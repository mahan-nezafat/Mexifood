import React from 'react';
import Food from './food';

const Foods = ({foodsData}) => {
    return ( 
        <>
           <div className="foods">
                {
                    foodsData.map((food) => {
                        return <Food foodData={food} />
                    })
                }
           </div>
        </>
     );
}
 
export default Foods;