/**
* Libraries
*/

import React from 'react';

import {
    connect
} from 'react-redux';

/**
* Styles
*/

import './popularVsRecentCard.scss';

/**
* Images
*/

import StoryImage1 from '../../../../images/photo-1527358043728-909898958b29.jpg';
import StoryImage2 from '../../../../images/rocking-chairs-white-chairs-rockers.jpg';
import StoryImage3 from '../../../../images/coffee-latte-art-coffee-shop.jpg';
import StoryImage4 from '../../../../images/coffee-cup-latte-cappuccino.jpg';
import StoryImage5 from '../../../../images/coffee-cup-beverage-food-photo.jpg';
import StoryImage6 from '../../../../images/white-bowl-beside-glass-cup.jpg';
import DefaultImage from '../../../../images/error.jpg';

/**
* Utility
*/

import {
    H4,
    H5,
    H6,
    EH0,
    EW1,
} from '../../../UtilityComponents';

/**
* PopularVsRecentCard component definition and export
*/

export const PopularVsRecentCard = (props) => {

    /**
    * Methods
    */

    const loadImage = (img) => {
        switch(img) {
            case 'image1':
                return StoryImage1;
            case 'image2':
                return StoryImage2;
            case 'image3':
                return StoryImage3;
            case 'image4':
                return StoryImage4;
            case 'image5':
                return StoryImage5;
            case 'image6':
                return StoryImage6;
            default:
                return DefaultImage;
        }
    }

    /**
    * Markup
    */

    return(
        <div className="popular-vs-recent-card">
            {!props.text ? 
            <>
                <div 
                    className="popular-vs-recent-card-image" 
                    onClick={props.onClick}
                >
                    <img src={loadImage(props.image)}/>
                </div>
                <EW1/>
                <div className="popular-vs-recent-card-info">
                    <H4 
                        className="h4-animation-cursor" 
                        onClick={props.onClick}
                    >{props.header}</H4>
                    <EH0/>
                    <H6 className="h6-pink-grey-yanone-suva">{`${props.month} ${props.day}, ${props.year}`}</H6>
                </div> 
            </> :
            <H5 className="h5-pink-swan">{props.text}</H5>}
        </div>
    );
}

export default PopularVsRecentCard;
 