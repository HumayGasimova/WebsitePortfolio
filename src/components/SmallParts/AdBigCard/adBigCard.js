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
* Utility
*/

import {
    H2,
    H3,
    H4,
    H5,
    EH1,
    EH2,
    EW1,
    Line1
} from '../../UtilityComponents';

/**
* Styles
*/

import './adBigCard.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* AdBigCard component definition and export
*/

export const AdBigCard = (props) => {

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
        <div className={props.darkColor ? "ad-big-card-dark" : "ad-big-card-light"}>
            <div className="ad-big-wrapper">
                <H4>{props.description}</H4>
                <EW1/>
                <H4 className="h4-white">{props.location}</H4>
            </div>
            <EH1/>
            <H3>{props.advertisement}</H3>
            <EH1/>
            <Line1/>
            <EH1/>
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
)(AdBigCard);
 