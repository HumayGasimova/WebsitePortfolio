/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './h4.scss';

/**
* H4 component definition and export
*/

export const H4 = (props) => {

    /**
    * Markup
    */

    return(
        <div 
            className={props.className ? props.className : "h4"}
            onClick={props.onClick}
        >
           {props.children}
        </div>
    );
}

export default H4;
 