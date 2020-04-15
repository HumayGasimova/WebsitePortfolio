/**
* Libraries
*/

import React, {
    useState
} from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Styles
*/

import './storyCard.scss';

/**
* Utility
*/

import {
    H3,
    H4,
    H5,
    EH1,
    EW1,
    DoubleLine1
} from '../../UtilityComponents';

/**
* Images
*/

import StoryImage1 from '../../../images/photo-1527358043728-909898958b29.jpg';
import StoryImage2 from '../../../images/rocking-chairs-white-chairs-rockers.jpg';
import StoryImage3 from '../../../images/coffee-latte-art-coffee-shop.jpg';
import StoryImage4 from '../../../images/coffee-cup-latte-cappuccino.jpg';
import StoryImage5 from '../../../images/coffee-cup-beverage-food-photo.jpg';
import StoryImage6 from '../../../images/white-bowl-beside-glass-cup.jpg';
import DefaultImage from '../../../images/error.jpg';

/**
* Cnstants
*/

import * as Colors from '../../../constants/colors';

/**
* StoryCard component definition and export
*/

export const StoryCard = (props) => {

    /**
    * State
    */

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

    const loadImage = (img) => {
        switch(img) {
            case 'image1':
                return StoryImage1;
            case 'image2':
                return StoryImage2;
            case 'image3':
                return StoryImage3;
            case 'image4':
                return StoryImage4;
            case 'image5':
                return StoryImage5;
            case 'image6':
                return StoryImage6;
            default:
                return DefaultImage;
        }
    }

    const onClick = (obj) => {
        props.history.push(`/crypto-cafe/${props.path}`,{obj, comment: true});
    }

    /**
    * Markup
    */

    return(
        <div className={props.left ? "story-card-left" : "story-card-right"}>
            <div className={props.left ? "story-card-wrapper-left" : "story-card-wrapper-right"}>
                <div 
                    className="story-card-image"
                    onMouseLeave={handleMouseLeave} 
                    onMouseEnter={handleMouseEnter} 
                >
                    <img src={loadImage(props.image)}/>
                    <CSSTransition 
                            in={isHovering} 
                            timeout={2000}
                            mountOnEnter
                            unmountOnExit
                            classNames={{
                                enter: '',
                                enterActive: 'story-card-image-hover-open',
                                exit: '',
                                exitActive: 'story-card-image-hover-close'
                            }}
                        > 
                        <div className="story-card-image-hover">
                            <div 
                                className="story-card-image-hover-icons"
                                onClick={props.onClick}
                            >
                                <FontAwesomeIcon 
                                    icon={props.iconLink} 
                                    size="lg" 
                                    color="white"
                                />
                            </div>
                            <EW1/>
                            <div 
                                className="story-card-image-hover-icons"
                                onClick={props.openGallery}
                            >
                                <FontAwesomeIcon 
                                    icon={props.iconSearch} 
                                    size="lg" 
                                    color="white"
                                />
                            </div>
                        </div>
                    </CSSTransition>
                </div>
                <div className="story-card-description">
                    <H3 
                        className="h3-animation"
                        onClick={props.onClick}
                    >{props.header}</H3>
                    <EH1/>
                    {!props.archievesMonth ? 
                        <>
                            <DoubleLine1/>
                            <EH1/>
                        </> : null}
                    <H5 textColor={Colors.EBB}>{props.description} [...]</H5>
                    {!props.archievesMonth ? 
                    <>
                        <EH1/>
                        <div className="story-card-link">
                            <div 
                                className="story-card-link-left"
                                onClick={props.onClick}
                            >
                                <H4 className="h4-animation-with-icon-right">Read more</H4>
                            </div>
                            <EW1/>
                            <FontAwesomeIcon 
                                icon={props.iconComments} 
                                size="sm" 
                                className="icon-comments"
                                onClick={() => onClick(props.obj)}
                            />
                        </div> 
                    </> : null}
                </div>
            </div>
        </div>
    );
}

export default StoryCard;
