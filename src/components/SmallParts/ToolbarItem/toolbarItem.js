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

import './toolbarItem.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* ToolbarItem component definition and export
*/

export const ToolbarItem = (props) => {

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
        <div className={!props.menuIsShown ? (props.active ? "toolbar-item-active-disappear" : "toolbar-item-disappear") : (props.active ? "toolbar-item-active" : "toolbar-item")}>
            {props.text}
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
)(ToolbarItem);
 