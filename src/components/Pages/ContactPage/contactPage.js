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
* Components
*/

import Toolbar from '../../Parts/Toolbar/toolbar';
import MovingBubbles from '../../Parts/MovingBubbles/movingBubbles';
import SendMessage from '../../SmallParts/SendMessage/sendMessage';
import Footer from '../../Parts/Footer/footer';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Styles
*/

import './contactPage.scss';

/**
* Images
*/

import Map from '../../../images/BakuMap.png';

/**
* ContactPage component definition and export
*/

export const ContactPage = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    /**
    * Markup
    */

    return(
        <div className="contact-page">
            <Toolbar/>
            <MovingBubbles 
                mainHeader={"Contact"}
            />
            <div className="contact-page-wrapper">
                <div className="contact-page-header">Contact Information</div>
                <div className="contact-page-wrapper2">
                    <div className="contact-page-info">Address: 25 West 27th Street, Suite 581  734716</div>
                    <div className="contact-page-info">Phone: + 0123456798</div>
                    <div className="contact-page-info">Email: info@yoursite.com</div>
                    <div className="contact-page-info">Website yoursite.com</div>
                </div>
                <div className="contact-page-wrapper3">
                    <SendMessage/>
                    <div className="contact-page-map"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            // menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
        };
    },
    (dispatch) => {
        return {
            // toggleMenuButton: bindActionCreators(Actions.toggleMenuButton, dispatch),
        };
    }
)(ContactPage);
 