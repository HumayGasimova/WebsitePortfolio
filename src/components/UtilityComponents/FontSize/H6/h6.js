/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './h6.scss';

/**
* H6 component definition and export
*/

export const H6 = (props) => {

    /**
    * Markup
    */

    return(
        <div className={props.className ? props.className : "h6"}>
           {props.children}
        </div>
    );
}

export default H6;
 