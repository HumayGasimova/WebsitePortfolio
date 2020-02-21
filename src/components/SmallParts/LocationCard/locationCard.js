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
    Line2
} from '../../UtilityComponents';

/**
* Styles
*/

import './locationCard.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Image1 from '../../../images/17222.jpg';
import Image2 from '../../../images/dessert.jpg';
import Image3 from '../../../images/breakfast-roll-have-breakfast-strawberries.jpg';

/**
* LocationCard component definition and export
*/

export const LocationCard = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    const websiteLink = () => {
        window.location.assign(`https://avada.theme-fusion.com/`);
    }

    /**
    * Markup
    */

    return(
        <div className="location-card">
            <H3>{props.city}</H3>
            <EH2/>
            <H5 className="h5-pink-swan">{props.addressLine1}</H5>
            <H5 className="h5-pink-swan">{props.addressLine2}</H5>
            <H5 className="h5-pink-swan">{`T: ${props.phone}`}</H5>
            <div className="location-card-wrapper">
                <H5 className="h5-pink-swan">E:</H5>
                <EW1/>
                <H5 className="h5-animated">{props.email}</H5>
            </div>
            <div className="location-card-wrapper">
                <H5 className="h5-pink-swan">W:</H5> 
                <EW1/>
                <H5 className="h5-animated" onClick={websiteLink}>{props.website}</H5> 
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
)(withRouter(LocationCard));
 