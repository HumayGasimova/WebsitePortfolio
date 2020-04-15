/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

/**
* Styles
*/

import './foodAndDrink.scss';

/**
* Components
*/

import Toolbar from '../../Parts/Toolbar/toolbar';
import MenuFood from '../../Parts/MenuFood/menuFood';
import MenuDrinks from '../../Parts/MenuDrinks/menuDrinks';
import Reservations from '../../Parts/Reservations/reservations';
import Advantages from '../../Parts/Advantages/advantages';
import Footer from '../../Parts/Footer/footer';

/**
* Utility
*/

import {
    H1,
    H3,
    EH0,
    EH1,
    Line2
} from '../../UtilityComponents';

/**
* FoodAndDrink component definition and export
*/

export const FoodAndDrink = () => {

    /**
    * Methods
    */

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /**
    * Markup
    */

    return(
        <>
            <div className="food-and-drink-cover-wrapper">
                <div className="food-and-drink-wrapper-backgroud-div"/>
            </div>
            <div className="food-and-drink-header-text">
                <H1 className="h1-center">FOOD & DRINK</H1>
                <EH0/>
                <Line2/>
                <EH0/>
                <EH1/>
                <H3 className="h3-center">TENDER STEAKS, TASTY BURGERS AND LIGHT BITES. WASH IT DOWN WITH A COFFEE OR A BEER.</H3>
            </div>
            <div className="food-and-drink-wrapper">
                <MenuFood/>
                <MenuDrinks/>
                <Reservations/>
                <Advantages/>
                <Footer/>
            </div>
        </>
    );
}

export default FoodAndDrink;
 