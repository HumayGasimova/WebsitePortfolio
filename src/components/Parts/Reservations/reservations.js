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

import './reservations.scss';

/**
* Components
*/

import Button from '../../../library/Button/button';
// import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

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
    Line1
} from '../../UtilityComponents';

/**
* Images
*/

/**
* Description component definition and export
*/

export const Reservations = (props) => {

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
        <div className="reservations">
            <div className="reservations-wrapper">
                <EH4/>
                <H2>RESERVATIONS</H2>
                <EH1/>
                <Line1/>
                <EH1/>
                <EH1/>
                <H3 center>
                    WE’RE NOT TRYING TO BE COOL BUT SADLY THERE ARE ONLY 68 
                    SEATS IN EACH CAFE AND THEY FILL UP QUICKLY. IF YOU WANT 
                    IN, MAKE A RESERVATION TODAY.
                </H3>
                <EH4/>
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
)(Reservations);
 