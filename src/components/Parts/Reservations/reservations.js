/**
* Libraries
*/

import React from 'react';


/**
* Styles
*/

import './reservations.scss';

/**
* Utility
*/

import {
    H2,
    H3,
    EH1,
    EH4,
    Line1
} from '../../UtilityComponents';

/**
* Reservations component definition and export
*/

export const Reservations = () => {

    /**
    * Markup
    */

    return(
        <div className="reservations">
            <div className="reservations-wrapper">
                <EH4/>
                <H2>RESERVATIONS</H2>
                <EH1/>
                <Line1/>
                <EH1/>
                <EH1/>
                <H3 className="h3-center">
                    WE’RE NOT TRYING TO BE COOL BUT SADLY THERE ARE ONLY 68 
                    SEATS IN EACH CAFE AND THEY FILL UP QUICKLY. IF YOU WANT 
                    IN, MAKE A RESERVATION TODAY.
                </H3>
                <EH4/>
            </div>
        </div>
    );
}
 export default Reservations;
 