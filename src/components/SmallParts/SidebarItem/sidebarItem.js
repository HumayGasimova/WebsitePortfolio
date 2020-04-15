/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './sidebarItem.scss';

/**
* SidebarItem component definition and export
*/

export const SidebarItem = (props) => {

    /**
    * Markup
    */

    return(
        <div 
            onClick={props.onClick}
            className={props.active ? "sidebar-item-active" : "sidebar-item"}
        >
            {props.text}
        </div>
    );
}

export default SidebarItem;
 