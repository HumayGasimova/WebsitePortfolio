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

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Styles
*/

import './footer.scss';

/**
* Icons
*/

import { 
    faPhoneAlt,
    faEnvelope,
    faMapMarkerAlt    
} from '@fortawesome/free-solid-svg-icons'

/**
* Components
*/

import FooterItem from '../../SmallParts/FooterItem/footerItem';
import SocialMediaIcons from '../../SmallParts/SocialMediaIcons/socialMediaIcons';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import {
    footerInfo
} from '../../../constants/footerInfo';

/**
* Footer component definition and export
*/

export const Footer = (props) => {

    /**
    * Methods
    */

    const renderLinks = () => {
        return(
            <div className="footer-section1-items">{footerInfo.map((el, i) => {
                return(
                    <FooterItem
                        key={i}
                        header={el.header}
                        links={el.links}
                    />
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="footer">
            <div className="footer-section1">
                {renderLinks()}
                <div className="footer-section1-get-in-touch">
                    <div className="footer-section1-get-in-touch-header">GET IN TOUCH</div>
                    <div className="footer-section1-get-in-touch-item">
                        <FontAwesomeIcon icon={faPhoneAlt} size="lg" className="icon-info"/>
                        <div className="footer-section1-get-in-touch-item-text">+09012345678</div>
                    </div>
                    <div className="footer-section1-get-in-touch-item">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" className="icon-info"/>
                        <div className="footer-section1-get-in-touch-item-text">qasimovahumay@gmail.com</div>
                    </div >
                    <div className="footer-section1-get-in-touch-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="icon-info"/>
                        <div className="footer-section1-get-in-touch-item-text">12 Avenue center, st. marks road, CA</div>
                    </div>
                </div>
            </div>
            <SocialMediaIcons 
                size="2x" 
                color="rgba(42, 20, 33, 0.7)"
                width="150px"
                linkFacebook={"http://www.facebook.com/"}
                linkLinkedIn={"http://www.linkedin.com/"}
                linkInstagram={"http://www.instagram.com/"}
                linkTwitter={"http://www.twitter.com/"}
                instagramIconStyle={"icon-social-media-instagram"}
            />
          <div className="footer-copyrights">Crypto347 © 2019. Designed by Humay Gasimova</div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // feedback: Selectors.getFeedbackState(state),
            // dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            // startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
            // stopChangingFeedbacks: bindActionCreators(Actions.stopChangingFeedbacks, dispatch)
        };
    }
)(Footer);
 