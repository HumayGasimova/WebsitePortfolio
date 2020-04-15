/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

/**
* Styles
*/

import './aboutUs.scss';

/**
* Components
*/

import CafeInfo from '../../Parts/CafeInfo/cafeInfo';
import Advantages from '../../Parts/Advantages/advantages';
import Footer from '../../Parts/Footer/footer';

/**
* Utility
*/

import {
    H1,
    H3,
    EH0,
    EH1,
    Line2
} from '../../UtilityComponents';

/**
* AboutUs component definition and export
*/

export const AboutUs = () => {

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
            <div className="about-us-cover-wrapper">
                <div className="about-us-wrapper-backgroud-div"/>
            </div>
            <div className="about-us-header-text">
                <H1 className="h1-center">ABOUT US</H1>
                <EH0/>
                <Line2/>
                <EH0/>
                <EH1/>
                <H3 className="h3-center">WE DON'T PREACH ABOUT COFFEE WE MAKE COFFEE. WE HAVE EIGHT VENUES ACROSS THIS CELESTIAL ROCK.</H3>
            </div>
            <div className="about-us-wrapper">
                <CafeInfo/>
                <Advantages/>
                <Footer/>
            </div>
        </>
    );
}

export default AboutUs;
 