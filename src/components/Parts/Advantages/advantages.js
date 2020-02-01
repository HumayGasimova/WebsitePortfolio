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
    withRouter
} from 'react-router-dom';

/**
* Styles
*/

import './advantages.scss';

/**
* Components
*/

import AdBigCard from '../../SmallParts/AdBigCard/adBigCard';

/**
* Images
*/

/**
* Utility
*/

import {
    H2,
    H4,
    H5,
    EH1,
    EH2,
    EW1,
    Line
} from '../../UtilityComponents';

/**
* Images
*/

import Image1 from '../../../images/waffles-ice-coffee-juice.jpg';
import Image2 from '../../../images/coffee-2440014_1280.jpg';
import Image3 from '../../../images/cheesecake-dessert-food-sweet.jpg';
import Image4 from '../../../images/coffee-cup-coffee-cup-aroma-cafe-wallpaper-preview.jpg';

/**
* Advantages component definition and export
*/

export const Advantages = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    /**
    * Markup
    */

    return(
        <div className="advantages">
            <AdBigCard darkColor/>
            <AdBigCard/>
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
            <div className="advantages-"></div>
            <div className="advantages-"></div>
            <div className="advantages-"></div>
            <div className="advantages-"></div>
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
)(Advantages);
 