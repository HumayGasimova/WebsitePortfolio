/**
* Libraries
*/

import React from 'react';

import {
    connect
} from 'react-redux';

/**
* Styles
*/

import './toolbarItem.scss';

/**
* ToolbarItem component definition and export
*/

export const ToolbarItem = (props) => {

    /**
    * Markup
    */

    return(
        <div onClick={props.onClick}
            className={!props.menuIsShown ? 
            (props.active ? "toolbar-item-active-disappear" : "toolbar-item-disappear") 
            : (props.active ? "toolbar-item-active" : "toolbar-item")}
        >
            {props.text}
        </div>
    );
}
 export default ToolbarItem;
 