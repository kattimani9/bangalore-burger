import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/pimage1.png';
import pimage2 from '../images/pimage2.png';
import pimage3 from '../images/pimage3.png';



function Products() {
    return (
        <div id='products'>
        <h1>Choose & Enjoy</h1>
        <p>Please book following products from the menu and Enjoy </p>
            <div className='a-container'>
                <Productbox image={pimage1} title="Luger Burger"/>
                <Productbox image={pimage2} title="Chicken Burger"/>
                <Productbox image={pimage3} title="Veg Burger"/>
            </div>
        </div>
    )
}

export default Products;
