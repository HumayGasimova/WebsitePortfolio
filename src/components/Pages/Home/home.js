/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

/**
* Styles
*/

import './home.scss';

/**
* Components
*/

import Description from '../../Parts/Description/description';
import Reservations from '../../Parts/Reservations/reservations';
import Advantages from '../../Parts/Advantages/advantages';
import Footer from '../../Parts/Footer/footer';

/**
* Images
*/

import CoverLogo from '../../../images/9b541779-8309-4d93-b45f-ac4060084b89_200x200.png';

/**
* Home component definition and export
*/

export const Home = () => {

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
            <div className="home-cover-wrapper">
                <div className="home-wrapper-backgroud-div"/>
            </div>
            <div className="home-logo">
                <img src={CoverLogo}/>
            </div>
            <div className="home-wrapper">
                <Description/>
                <Reservations/>
                <Advantages/>
                <Footer/>
            </div>
        </>
    );
}

export default Home;
 