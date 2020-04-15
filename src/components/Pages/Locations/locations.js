/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

/**
* Styles
*/

import './locations.scss';

/**
* Components
*/

import LocationsInTheWorld from '../../Parts/LocationsInTheWorld/locationsInTheWorld';
import Footer from '../../Parts/Footer/footer';

/**
* Locations component definition and export
*/

export const Locations = () => {

    /**
    * Methods
    */

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /**
    * Markup
    */

    return(
        <>
           <div className="locations-wrapper">
               <LocationsInTheWorld/>
               <Footer/>
           </div>
       </>
    );
}

export default Locations;
 