/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

/**
* Styles
*/

import './contact.scss';

/**
* Components
*/

import Description from '../../Parts/Description/description';
import GetInTouch from '../../Parts/GetInTouch/getInTouch';
import Reservations from '../../Parts/Reservations/reservations';
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
* Contact component definition and export
*/

export const Contact = () => {

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
            <div className="contact-cover-wrapper">
                <div className="contact-wrapper-backgroud-div"/>
            </div>
            <div className="contact-header-text">
                <H1 className="h1-center">CONTACT</H1>
                <EH0/>
                <Line2/>
                <EH0/>
                <EH1/>
                <H3 className="h3-center">IF YOU HAVE ANY QUESTIONS, FEEL FREE TO FILL OUT THE FORM BELOW AND SEND US.</H3>
            </div>
            <div className="contact-wrapper">
                <Description/>
                <GetInTouch/>
                <Reservations/>
                <Footer/>
            </div>
        </>
    );
}

export default Contact;
 