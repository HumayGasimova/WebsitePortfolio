/**
* Libraries
*/

import React from 'react';

/**
* Utility
*/

import {
    H3,
    H5,
    EH2,
    EW1
} from '../../UtilityComponents';

/**
* Styles
*/

import './locationCard.scss';

/**
* LocationCard component definition and export
*/

export const LocationCard = (props) => {

    /**
    * Methods
    */

    const websiteLink = () => {
        window.location.assign(`https://avada.theme-fusion.com/`);
    }

    /**
    * Markup
    */

    return(
        <div className="location-card">
            <H3>{props.city}</H3>
            <EH2/>
            <H5 className="h5-pink-swan">{props.addressLine1}</H5>
            <H5 className="h5-pink-swan">{props.addressLine2}</H5>
            <H5 className="h5-pink-swan">{`T: ${props.phone}`}</H5>
            <div className="location-card-wrapper">
                <H5 className="h5-pink-swan">E:</H5>
                <EW1/>
                <H5 
                    className="h5-animated"
                    onClick={websiteLink}
                >{props.email}</H5>
            </div>
            <div className="location-card-wrapper">
                <H5 className="h5-pink-swan">W:</H5> 
                <EW1/>
                <H5 
                    className="h5-animated" 
                    onClick={websiteLink}
                >{props.website}</H5> 
            </div>
        </div>
    );
}

export default LocationCard;
 