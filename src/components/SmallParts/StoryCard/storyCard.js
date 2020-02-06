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

/**
* Components
*/

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Styles
*/

import './storyCard.scss';

/**
* Utility
*/

import {
    H2,
    H3,
    H4,
    H5,
    EH1,
    EH2,
    EH4,
    EW1,
    Line1,
    DoubleLine1
} from '../../UtilityComponents';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import StoryImage1 from '../../../images/photo-1527358043728-909898958b29.jpg';
import StoryImage2 from '../../../images/rocking-chairs-white-chairs-rockers.jpg';
import StoryImage3 from '../../../images/coffee-latte-art-coffee-shop.jpg';
import StoryImage4 from '../../../images/coffee-cup-latte-cappuccino.jpg';
import StoryImage5 from '../../../images/coffee-cup-beverage-food-photo.jpg';
import StoryImage6 from '../../../images/white-bowl-beside-glass-cup.jpg';
import DefaultImage from '../../../images/error.jpg';

/**
* Cnstants
*/

import * as Colors from '../../../constants/colors';

/**
* StoryCard component definition and export
*/

export const StoryCard = (props) => {

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
        <div className={props.left ? "story-card-left" : "story-card-right"}>
            <div className="story-card-wrapper">
                <div className="story-card-image">
                    <img src={loadImage(props.image)}/>
                </div>
                <div className="story-card-description">
                    <H3>{props.header}</H3>
                    <EH1/>
                    <DoubleLine1/>
                    <EH1/>
                    <H5 textColor={Colors.EBB}>{props.description} [...]</H5>
                    <H3></H3>
                </div>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
        };
    },
    (dispatch) => {
        return {
            // toggleMenuButton: bindActionCreators(Actions.toggleMenuButton, dispatch),
        };
    }
)(StoryCard);
