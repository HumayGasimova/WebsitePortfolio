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

/**
* Icons
*/

import { 
    faComments,
    faThumbtack,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';

import { 
    faEnvelope
} from '@fortawesome/free-regular-svg-icons';

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
    EW3,
    EH3,
    Line1
} from '../../UtilityComponents';

/**
* Styles
*/

import './footerItem.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import * as Colors from '../../../constants/colors';

/**
* FooterItem component definition and export
*/

export const FooterItem = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    const renderIcon = (iconName) => {
        switch(iconName) {
            case 'faEnvelope':
                return faEnvelope;
            case 'faComments':
                return faComments;
            case 'faThumbtack':
                return faThumbtack;
            default:
                return faSpinner;
        }
    }

    /**
    * Markup
    */

    return(
            <>
                <EW3/>
                <EH3/>
                <div className="footer-item">
                    <FontAwesomeIcon icon={renderIcon(props.icon)} size="lg" color="rgb(180, 139, 62)" className="icon-arrow-left"/>
                    <EH1/>
                    <H4 className="h4-animation">{props.name}</H4>
                    <EH1/>
                    <H5 className="h5-pink-swan-center">{props.info}</H5>
                </div>
                <EW3/>
                <EH3/>
            </>
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
)(FooterItem);
 