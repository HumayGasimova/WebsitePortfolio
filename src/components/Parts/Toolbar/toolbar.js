/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    withRouter
} from 'react-router-dom';

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

import * as Actions from '../../../actions';

/**
* Styles
*/

import './toolbar.scss';

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

/**
* Toolbar component definition and export
*/

export const Toolbar = (props) => {

    /**
    * State
    */

    const size = useWindowSize();

    /**
    * Methods
    */

    // const toolbarOnClick = (path) => {
    //     props.history.push(`/${path}`);
    // }

    // const renderToolbarItems = () => {
    //     return(
    //         <>{toolabarItems.map((el) => {
    //             return(
    //                 <ToolbarItem 
    //                     key={el.id}
    //                     text={el.text}
    //                     options={el.options}
    //                     className="toolbar-item"
    //                     onClick={() => toolbarOnClick(el.path)}
    //                     optionClassName="toolbar-item-options"
    //                     // toolBarInit={toolBarInit}
    //                     // id={el.itemId}
    //                     // active={el.itemId === props.activatedIcon}
    //                 />
    //             )
    //         })}</>
    //     )
    // }


    /**
    * Markup
    */

    return(
        <div className="toolbar">
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
            // menuButtonIsToggled: bindActionCreators(Actions.menuButtonIsToggled, dispatch),
        };
    }
)(withRouter(Toolbar));
 