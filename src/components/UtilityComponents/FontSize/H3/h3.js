/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './h3.scss';

/**
* H3 component definition and export
*/

export const H3 = (props) => {

    /**
    * Markup
    */

    return(
        <div 
            className={props.className ? props.className  : "h3"}
            onClick={props.onClick}
        >
           {props.children}
        </div>
    );
}

export default H3;
 