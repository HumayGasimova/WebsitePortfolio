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
    * State
    */

    /**
    * Methods
    */

    /**
    * Markup
    */

    return(
        <div className={props.white ? "h4-white" : "h4"}>
           {props.children}
        </div>
    );
}

export default H4;
 