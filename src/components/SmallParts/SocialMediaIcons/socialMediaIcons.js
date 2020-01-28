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
            <FontAwesomeIcon 
                icon={faFacebookF} 
                size={props.size} 
                color={props.color} 
                className="icon-social-media-facebook"
                onClick={() => iconOnClick("facebook", props.linkFacebook)}
            />
            <FontAwesomeIcon 
                icon={faLinkedinIn} 
                size={props.size} 
                color={props.color} 
                className="icon-social-media-linkedIn"
                onClick={() => iconOnClick("linkedIn", props.linkLinkedIn)}
            />
            <FontAwesomeIcon 
                icon={faInstagram} 
                size={props.size} 
                color={props.color} 
                className={props.instagramIconStyle}
                onClick={() => iconOnClick("instagram", props.linkInstagram)}
            />
            <FontAwesomeIcon 
                icon={faTwitter} 
                size={props.size} 
                color={props.color} 
                className="icon-social-media-twitter"
                onClick={() => iconOnClick("twitter", props.linkTwitter)}
            />
        </div>
    );
}

export default SocialMediaIcons;
 