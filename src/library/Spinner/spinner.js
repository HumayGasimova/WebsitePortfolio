/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Styles
*/

import './spinner.scss';

/**
* Spinner component definition and export
*/

export const Spinner = (props) => {

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
        <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Spinner;
 