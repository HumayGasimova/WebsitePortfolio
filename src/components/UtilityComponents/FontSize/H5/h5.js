/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './h5.scss';


/**
* H5 component definition and export
*/

export const H5 = (props) => {

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
        <div className={props.textColor ? `h5-${props.textColor}` : (props.className ? props.className : "h5")}>
           {props.children}
        </div>
    );
}

export default H5;
 