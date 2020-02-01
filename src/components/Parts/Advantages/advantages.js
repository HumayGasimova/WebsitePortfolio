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

import Cake from '../../../images/cake.jpg';
import CoffeeCups from '../../../images/two-blue-white-and-red-coffee-cups-on-brown-leather-briefcase.jpg';
import Plant from '../../../images/plant-stand-green-standing.jpg';

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
            <div className="advantages-"></div>
            <div className="advantages-"></div>
            <div className="advantages-"></div>
            <div className="advantages-"></div>
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
 