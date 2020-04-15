/**
* Libraries
*/

import React from 'react';

/**
* Utility
*/

import {
    H2,
    H3,
    H4,
    EH1,
    Line2
} from '../../UtilityComponents';

/**
* Styles
*/

import './menuFoodCard.scss';

/**
* Images
*/

import Image1 from '../../../images/17222.jpg';
import Image2 from '../../../images/dessert.jpg';
import Image3 from '../../../images/breakfast-roll-have-breakfast-strawberries.jpg';

/**
* MenuFoodCard component definition and export
*/

export const MenuFoodCard = (props) => {

    /**
    * Methods
    */

    const renderMenuItems = () => {
        return(
            <>{props.menu.map((el, i) => {
                return(
                    <div key={i}>
                        <EH1/>
                        <H3>{el.name}</H3>
                        <H4>{el.ingredients}</H4>
                        <EH1/>
                    </div>
                )
            })}</>
        )
    }

    const loadImage = (img) => {
        switch(img){
            case 'starters':
                return Image1;
            case 'mainCourse':
                return Image2;
            case 'desserts':
                return Image3;
        }
    }

    /**
    * Markup
    */

    return(
        <div className={props.darkColor ? "menu-food-card-dark" : "menu-food-card-light"}>
            <div className="menu-food-card-left-part">
                <H2>{props.header}</H2>
                <EH1/>
                <Line2/>
                <EH1/>
                {renderMenuItems()}
            </div>
            <div className="menu-food-card-right-part">
                <div className="menu-food-card-promo">
                    <H4>{props.promo.name}</H4>
                    <EH1/>
                    <H3>{props.promo.condition}</H3>
                </div>
                <div className="menu-food-card-image">
                    <img src={loadImage(props.image)}/>
                </div>
            </div>
        </div>
    );
}

export default MenuFoodCard;
 