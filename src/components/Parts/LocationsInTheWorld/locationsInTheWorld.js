/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Styles
*/

import './locationsInTheWorld.scss';

/**
* Components
*/


/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Smoothie from '../../../images/smoothie-juice-raspberry-drink.jpg'

/**
* Utility
*/

import {
    H2,
    H3,
    H4,
    H5,
    EH0,
    EH1,
    EH2,
    EH4,
    EW1,
    Line2
} from '../../UtilityComponents';

/**
* Constants
*/

import {
    menuDrinksArray
} from '../../../constants/menuDrinksArray';

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

export const LocationsInTheWorld = (props) => {

    /**
    * State
    */

    const [locationImages, setLocationImages] = useState([
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

    useEffect(() => {
        // props.initMenuDrinks(menuDrinksArray);
    }, []);

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
                    <div className="locations-in-the-world-image" key={i}>
                        <img src={loadImage(el.image)}/>
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
            <div className="locations-in-the-world-addresses"></div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // menuDrinks: Selectors.getMenuDrinksState(state),
        };
    },
    (dispatch) => {
        return {
            // initMenuDrinks: bindActionCreators(Actions.initMenuDrinks, dispatch),
        };
    }
)(LocationsInTheWorld);
 