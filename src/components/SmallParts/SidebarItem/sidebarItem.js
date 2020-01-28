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

import './sidebarItem.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* SidebarItem component definition and export
*/

export const SidebarItem = (props) => {

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
        <div className="sidebar">
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
)(SidebarItem);
 