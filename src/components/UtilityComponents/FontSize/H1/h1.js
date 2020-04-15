/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './h1.scss';

/**
* H1 component definition and export
*/

export const H1 = (props) => {

    /**
    * Markup
    */

    return(
        <div className={props.className ? props.className : "h1"}>
           {props.children}
        </div>
    );
}

export default H1;
 