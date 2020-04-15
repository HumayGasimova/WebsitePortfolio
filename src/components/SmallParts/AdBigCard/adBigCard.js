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
    EH1,
    EW1,
    Line1
} from '../../UtilityComponents';

/**
* Styles
*/

import './adBigCard.scss';

/**
* AdBigCard component definition and export
*/

export const AdBigCard = (props) => {

    /**
    * Markup
    */

    return(
        <div className={props.darkColor ? "ad-big-card-dark" : "ad-big-card-light"}>
            <div className="ad-big-card-wrapper">
                <H4>{props.description}</H4>
                <EW1/>
                <H4 className="h4-white">{props.location}</H4>
            </div>
            <EH1/>
            <H3>{props.advertisement}</H3>
            <EH1/>
            <Line1/>
            <EH1/>
        </div>
    );
}

export default AdBigCard;
 