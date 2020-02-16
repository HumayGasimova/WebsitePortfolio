/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Icons
*/

import { 
    faComments
} from '@fortawesome/free-regular-svg-icons';

/**
* Components
*/

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Styles
*/

import './popularVsRecentCard.scss';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

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
import * as Colors from '../../../../constants/colors';

/**
* Utility
*/

import {
    H2,
    H3,
    H4,
    H5,
    H6,
    EH0,
    EH1,
    EH2,
    EH4,
    EW1,
    EW2,
    Line1
} from '../../../UtilityComponents';

/**
* Images
*/


/**
* PopularVsRecentCard component definition and export
*/

export const PopularVsRecentCard = (props) => {

    /**
    * State
    */

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
                <div className="popular-vs-recent-card-image">
                    <img src={loadImage(props.image)}/>
                </div>
                <EW1/>
                <div className="popular-vs-recent-card-info">
                    <H4 className="h4-animation">{props.header}</H4>
                    <EH0/>
                    <H6 className="h6-pink-grey-yanone-suva">{`${props.month} ${props.day}, ${props.year}`}</H6>
                </div> 
            </> :
            <H5 className="h5-pink-swan">{props.text}</H5>}
        </div>
        
    );
}

export default connect(
    (state) => {
        return {
            // popularVsRecentStories: Selectors.getPopularVsRecentStoriesState(state),
        };
    },
    (dispatch) => {
        return {
            // startInitPopularAndRecentStories: bindActionCreators(Actions.startInitPopularAndRecentStories, dispatch),
        };
    }
)(PopularVsRecentCard);
 