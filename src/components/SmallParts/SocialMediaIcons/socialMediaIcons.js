/**
* Libraries
*/

import React from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Icons
*/

import { 
    faFacebookF,
    faLinkedinIn,
    faInstagram,
    faTwitter
} from '@fortawesome/fontawesome-free-brands'

/**
* Styles
*/

import './socialMediaIcons.scss';

/**
* SocialMediaIcons component definition and export
*/

export const SocialMediaIcons = (props) => {

    /**
    * Methods
    */

    const iconOnClick = (socialMedia, link) => {
        switch(socialMedia){
            case 'facebook':
                return window.location = link;
            case 'linkedIn':
                return window.location = link;
            case 'instagram':
                return window.location = link;
            case 'twitter':
                return window.location = link;
        }
    }

    /**
    * Markup
    */

    return(
        <div 
            className="icons-soc-med" 
            style={{width: `${props.width}`}}
        >
            <div className="icon-wrapper">
                <FontAwesomeIcon 
                    icon={faFacebookF} 
                    size={props.size}
                    className="icon-social-media"
                    onClick={() => iconOnClick("facebook", props.linkFacebook)}
                />
            </div>
            <div className="icon-wrapper">
                <FontAwesomeIcon 
                    icon={faLinkedinIn} 
                    size={props.size}
                    className="icon-social-media"
                    onClick={() => iconOnClick("linkedIn", props.linkLinkedIn)}
                />
            </div>
            <div className="icon-wrapper">
                <FontAwesomeIcon 
                    icon={faInstagram} 
                    size={props.size}
                    className="icon-social-media"
                    onClick={() => iconOnClick("instagram", props.linkInstagram)}
                />
            </div>
            <div className="icon-wrapper">
                <FontAwesomeIcon 
                    icon={faTwitter} 
                    size={props.size}
                    className="icon-social-media"
                    onClick={() => iconOnClick("twitter", props.linkTwitter)}
                />
            </div>
        </div>
    );
}

export default SocialMediaIcons;
 