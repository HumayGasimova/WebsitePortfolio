/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './h2.scss';

/**
* H2 component definition and export
*/

export const H2 = (props) => {

    /**
    * Markup
    */

    return(
        <div className={props.className ? props.className : "h2"}>
           {props.children}
        </div>
    );
}

export default H2;
 