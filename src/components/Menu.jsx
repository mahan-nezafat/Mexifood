import React, { useState } from 'react';
import Foods from './foods/foods';


const Menu = () => {

    const [foodsData, setfoodsData] = useState([
        {
          name: "Tacos al Pastor",
          ingredients: "Made with marinated pork, typically cooked on a vertical rotisserie (trompo), and served in corn tortillas",
          price: 12,
          photoName: "foods/Tacos al Pastor.jpg",
          soldOut: false,
        },
        {
          name: "Guacamole",
          ingredients: "A classic Mexican dip made from mashed avocado with lime juice, onion, cilantro, jalapeño or serrano pepper, and salt",
          price: 14,
          photoName: "foods/Guacamole.jpg",
          soldOut: false,
        },
        {
          name: "Enchiladas",
          ingredients: "Rolled tortillas stuffed with a filling and topped with a chili sauce",
          price: 16,
          photoName: "foods/Enchiladas.jpg",
          soldOut: false,
        },
        {
          name: "Chiles Rellenos",
          ingredients: "consists of roasted or fried chili peppers, usually poblano peppers, stuffed with cheese, meat, or a mixture of both",
          price: 13,
          photoName: "foods/Chiles Rellenos.jpg",
          soldOut: true,
        },
        {
          name: "Tamales",
          ingredients: "made from masa (corn dough), which is filled with various ingredients such as meat, cheese, or vegetables",
          price: 15,
          photoName: "foods/Tamales.jpg",
          soldOut: true,
        },
        {
          name: "Chiles en Nogada",
          ingredients: "A festive dish made with roasted poblano peppers stuffed with a mixture of ground meat, fruits, nuts.",
          price: 18,
          photoName: "foods/Chiles en Nogada.jpg",
          soldOut: false,
        }
      ]);
      

    return ( 
        <>
            <div className="menu">
                <h2>OUR MENU</h2>
                <p>Authentic Mexican cuisine. 6 creative dishes to choose from. All
                    from our experinced chefs, all organic, all delicious. </p>
                <Foods foodsData={foodsData}/>
            </div>
        </>
     );
}
 
export default Menu;