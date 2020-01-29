/**
* Libraries
*/

import React, {
    useState
} from 'react';

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

import './socialMediaIcon.scss';

/**
* SocialMediaIcon component definition and export
*/

export const SocialMediaIcon = (props) => {

    const [isHovering, setIsHovering] = useState(false);

    /**
    * Methods
    */

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    const loadIconName = (iconName) => {
        switch(iconName){
            case 'Facebook':
                return faFacebookF;
            case 'LinkedIn':
                return faLinkedinIn;
            case 'Instagram':
                return faInstagram;
            case 'Twitter':
                return faTwitter;
        }
    }

    const iconOnClick = (socialMedia, link) => {
        switch(socialMedia){
            case 'Facebook':
                return window.location = link;
            case 'LinkedIn':
                return window.location = link;
            case 'Instagram':
                return window.location = link;
            case 'Twitter':
                return window.location = link;
        }
    }

    /**
    * Markup
    */

    return(
        <div className="icon-soc-med-wrapper">
            <div 
                className="icon-soc-med"
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            >
                <FontAwesomeIcon 
                    icon={loadIconName(props.name)} 
                    size='lg'
                    className="icon-social-media"
                    // onClick={() => iconOnClick(el.name, props.linkFacebook)}
                />
            </div>
            {isHovering ? 
                <div className="name-soc-med">
                    {props.name}
                </div>
            : null}
        </div>
    );
}

export default SocialMediaIcon;
 