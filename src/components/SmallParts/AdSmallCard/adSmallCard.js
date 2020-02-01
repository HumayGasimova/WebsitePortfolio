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
    Line
} from '../../UtilityComponents';

/**
* Styles
*/

import './adSmallCard.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* AdSmallCard component definition and export
*/

export const AdSmallCard = (props) => {

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
        <div className={props.darkColor ? "ad-small-card-dark" : "ad-small-card-light"}>
             <EH1/>
            <H4>{props.description}</H4>
            <EH1/>
            <H3>{props.advertisement}</H3>
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
)(AdSmallCard);
 