/**
* Libraries
*/

import React from 'react';

/**
* Utility
*/

import {
    H3,
    H4,
    EH1
} from '../../UtilityComponents';

/**
* Styles
*/

import './adSmallCard.scss';

/**
* AdSmallCard component definition and export
*/

export const AdSmallCard = (props) => {

    /**
    * Markup
    */

    return(
        <div className={props.darkColor ? "ad-small-card-dark" : "ad-small-card-light"}>
            <EH1/>
            <H4>{props.description}</H4>
            <EH1/>
            <H3>{props.advertisement}</H3>
            <EH1/>
        </div>
    );
}

export default AdSmallCard;
 