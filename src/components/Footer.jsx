import React from 'react';

const Footer = () => {
    const openHour = 12;
    const closeHour = 23;
    const currentHour = new Date().getHours();
    console.log(currentHour)
    return ( 
        <>
            <div className="footer">
                <div className="order">
                    <span>
                        {currentHour > openHour && currentHour < closeHour && "we're open until 23:00. we would love to serve you delicious food."}
                        {currentHour > closeHour && "sorry we're closed. try coming tomorrow."}
                    </span>
                    <button className="btn">Order now</button>
                </div>
            </div>
        </>
     );
}
 
export default Footer;