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

import './footerItem.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

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



    /**
    * Markup
    */

    return(
        <div className="footer-item">
           
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
)(FooterItem);
 