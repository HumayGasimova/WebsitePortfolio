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
    CSSTransition 
} from 'react-transition-group';

import {
    withRouter
} from 'react-router-dom';

/**
* Components
*/

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Styles
*/

import './sidebar.scss';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

import {
    toolabarItems
} from '../../../constants/toolbarItems';

/**
* Sidebar component definition and export
*/

export const Sidebar = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    const sidebarOnClick = (path) => {
        props.history.push(`/${path}`);
    }

    const renderToolbarItems = () => {
        // return(
        //     <div className={props.menuButtonIsPressed ? "sidebar-mounted-items" : "sidebar-unmounted-items"}>
        //         {toolabarItems.map((el) => {
        //             return(
        //                 <ToolbarItem 
        //                     key={el.id}
        //                     text={el.text}
        //                     className="sidebar-item"
        //                     options={el.options}
        //                     onClick={() => sidebarOnClick(el.path)}
        //                     optionClassName="sidebar-item-options"
        //                 />
        //             )
        //     })}</div>
        // )
    }

    /**
    * Markup
    */

    return(
        <div className="sidebar">
            {renderToolbarItems()}
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
        };
    },
    (dispatch) => {
        return {
            toggleMenuButton: bindActionCreators(Actions.toggleMenuButton, dispatch),
        };
    }
)(withRouter(Sidebar));
 