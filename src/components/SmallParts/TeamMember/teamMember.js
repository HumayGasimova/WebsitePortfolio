/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

/**
* Styles
*/

import './teamMember.scss';

/**
* Components
*/

import SocialMediaIcons from '../../SmallParts/SocialMediaIcons/socialMediaIcons';

/**
* Images
*/

import Image1 from '../../../images/Portrait_Placeholder.png';


/**
* TeamMember component definition and export
*/

export const TeamMember = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

   const renderIamge = (img) => {
        switch(img) {
            case "Image1":
                return Image1;
        }
    }


    /**
    * Markup
    */

    return(
        <div className="team-member">
            <div className="team-member-full-name">{props.fullName}</div>
            <div className="team-member-position">{props.position}</div>
            <div className="team-member-image">
                <img src={renderIamge(props.image)}/>
            </div>
            <div className="team-member-info">{props.info}</div>
            <SocialMediaIcons 
                size="lg" 
                color="rgba(42, 20, 33, 0.5)"
                width="100px"
                linkFacebook={"http://www.facebook.com/"}
                linkLinkedIn={"http://www.linkedin.com/"}
                linkInstagram={"http://www.instagram.com/"}
                linkTwitter={"http://www.twitter.com/"}
                instagramIconStyle={"icon-social-media-instagram-team"}
            />
        </div>
    );
}

export default TeamMember;
 