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
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Icons
*/

import { 
    faComments
} from '@fortawesome/free-regular-svg-icons';

/**
* Styles
*/

import './stories.scss';

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
* Stories component definition and export
*/

export const Stories = (props) => {

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
        <div className="stories">
            <div className="stories-icon">
                <FontAwesomeIcon icon={faComments} size="3x" color="rgb(41, 39, 38)" className="icon-arrow-left"/>
                {/* {renderStoryPage()} */}
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
)(Stories);
 