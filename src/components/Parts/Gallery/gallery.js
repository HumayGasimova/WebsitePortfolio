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

import './gallery.scss';

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
* Gallery component definition and export
*/

export const Gallery = (props) => {

    /**
    * State
    */

   const [currentTopPosition, setCurrentTopPosition] = useState(0)

    /**
    * Methods
    */

    useEffect(() => {
        // props.initMenuDrinks(menuDrinksArray);
        let topPosition = document.body.scrollTop;
        setCurrentTopPosition(topPosition);
    }, []);

    // const renderLocationAddresses = () => {
    //     return(
    //         <div className="locations-in-the-world-addresses-wrapper">{locationsAddresses.map((el, i) => {
    //             return(
    //                 <div key={i} className="locations-in-the-world-address">
    //                     <LocationCard
    //                         city={el.city}
    //                         addressLine1={el.addressLine1}
    //                         addressLine2={el.addressLine2}
    //                         phone={el.phone}
    //                         email={el.email}
    //                         website={el.website}
    //                     />
    //                 </div>
    //             )
    //         })}</div>
    //     )
    // }
    
    /**
    * Markup
    */

    return(
        <div 
            className="gallery" 
            style={{top: `${currentTopPosition}`}}
        >
            
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
)(Gallery);
 