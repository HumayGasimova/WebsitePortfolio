/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './advantages.scss';

/**
* Components
*/

import AdBigCard from '../../SmallParts/AdBigCard/adBigCard';
import AdSmallCard from '../../SmallParts/AdSmallCard/adSmallCard';

/**
* Images
*/

import Image1 from '../../../images/waffles-ice-coffee-juice.jpg';
import Image2 from '../../../images/coffee-2440014_1280.jpg';
import Image3 from '../../../images/cheesecake-dessert-food-sweet.jpg';
import Image4 from '../../../images/coffee-cup-cup-of-coffee-cafe.jpg';

/**
* Advantages component definition and export
*/

export const Advantages = () => {

    /**
    * Markup
    */

    return(
        <div className="advantages">
            <AdBigCard 
                darkColor
                description="FOOD SPECIAL"
                location="NEW YORK CITY, USA"
                advertisement="AVADA CAFE ANNOUNCES THE WORLD FAMOUS AVADA SWISS CHEESEBURGER"
            />
            <AdBigCard
                description="EXCLUSIVE PROMOTION"
                location="LONDON, UNITED KINGDOM"
                advertisement="AVADA CAFE LONDON INTRODUCES SPECIAL 10% DISCOUNT FOR STUDENTS" 
            />
            <div className="advantages-image">
                <img src={Image1}/>
            </div>
            <div className="advantages-image">
                <img src={Image2}/>
            </div>
            <div className="advantages-image">
                <img src={Image3}/>
            </div>
            <div className="advantages-image">
                <img src={Image4}/>
            </div>
            <AdSmallCard
                darkColor
                description="SYDNEY"
                advertisement="NEW STORE OPENED" 
            />
            <AdSmallCard
                description="LATEST NEWS"
                advertisement="10% STUDENT DISCOUNT" 
            />
            <AdSmallCard
                darkColor
                description="FOOD SPECIAL"
                advertisement="LEMON ZEST BROWNIES" 
            />
            <AdSmallCard
                description="WI-FI HOTSPOT"
                advertisement="FASTER INTERNET SPEEDS" 
            />
        </div>
    );
}
 
export default Advantages;
 