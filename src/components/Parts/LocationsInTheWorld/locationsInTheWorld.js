/**
* Libraries
*/

import React, {
    useState
} from 'react';

/**
* Styles
*/

import './locationsInTheWorld.scss';

/**
* Components
*/

import LocationCard from '../../SmallParts/LocationCard/locationCard';

/**
* Utility
*/

import {
    H3,
    H4,
    EH0,
    EH2
} from '../../UtilityComponents';

/**
* Constants
*/

import {
    locationsAddresses
} from '../../../constants/locationsAddresses';

/**
* Images
*/

import Image1 from '../../../images/golden-gate-bridge-san-francisco-bay-architecture-wallpaper-preview.jpg';
import Image2 from '../../../images/australia-3905135_960_720.jpg';
import Image3 from '../../../images/paris-4468632_960_720.jpg';
import Image4 from '../../../images/autumn-colors-in-prague-czechia.jpg';
import DefaultImage from '../../../images/error.jpg';

/**
* LocationsInTheWorld component definition and export
*/

export const LocationsInTheWorld = () => {

    /**
    * State
    */

    const [locationImages] = useState([
        {
            id: 1,
            image: "image1"
        },
        {
            id: 2,
            image: "image2"
        },
        {
            id: 3,
            image: "image3"
        },
        {
            id: 4,
            image: "image4"
        },
    ]);

    /**
    * Methods
    */

    const loadImage = (name) => {
        switch(name){
            case 'image1':
                return Image1;
            case 'image2':
                return Image2;
            case 'image3':
                return Image3;
            case 'image4':
                return Image4;
            default:
                return DefaultImage;
        }

    }

    const renderLocationImages = () => {
        return(
            <div className="locations-in-the-world-images-wrapper">{locationImages.map((el, i) => {
                return(
                    <div key={i} className="locations-in-the-world-image">
                        <img src={loadImage(el.image)}/>
                    </div>
                )
            })}</div>
        )
    }

    const renderLocationAddresses = () => {
        return(
            <div className="locations-in-the-world-addresses-wrapper">{locationsAddresses.map((el, i) => {
                return(
                    <div key={i} className="locations-in-the-world-address">
                        <LocationCard
                            city={el.city}
                            addressLine1={el.addressLine1}
                            addressLine2={el.addressLine2}
                            phone={el.phone}
                            email={el.email}
                            website={el.website}
                        />
                    </div>
                )
            })}</div>
        )
    }
    
    /**
    * Markup
    */

    return(
        <div className="locations-in-the-world">
            <div className="locations-in-the-world-images">
                <H3>LOCATIONS</H3>
                <EH0/>
                <H4>ALL AROUND THE WORLD</H4>
                <EH2/>
                <EH2/>
                {renderLocationImages()}
            </div>
            <div className="locations-in-the-world-addresses">
                {renderLocationAddresses()}
            </div>
        </div>
    );
}

export default LocationsInTheWorld;
 