/**
* Libraries
*/

import React, {
    useState,
    useEffect,
    useRef
} from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Icons
*/

import { 
    faSearch,
    faLink
} from '@fortawesome/free-solid-svg-icons';

/**
* Styles
*/

import './relatedPostCard.scss';

/**
* Utility
*/

import {
    H4,
    H6,
    EH1,
    EW1
} from '../../../UtilityComponents';

/**
* Images
*/

import StoryImage1 from '../../../../images/photo-1527358043728-909898958b29.jpg';
import StoryImage2 from '../../../../images/rocking-chairs-white-chairs-rockers.jpg';
import StoryImage3 from '../../../../images/coffee-latte-art-coffee-shop.jpg';
import StoryImage4 from '../../../../images/coffee-cup-latte-cappuccino.jpg';
import StoryImage5 from '../../../../images/coffee-cup-beverage-food-photo.jpg';
import StoryImage6 from '../../../../images/white-bowl-beside-glass-cup.jpg';
import DefaultImage from '../../../../images/error.jpg';

/**
* RelatedPostCard component definition and export
*/

export const RelatedPostCard = (props) => {

    /**
    * State
    */

    const [isHovering, setIsHovering] = useState(false);

    const resizeRef = useRef();

    /**
    * Methods
    */

    useEffect(() => {
        resizeRef.current = handleResize;
    })

    useEffect(() => {
        const resize = () => {
            resizeRef.current()
        }

        const onResize = window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    const handleResize = () => {
        let cardWidth = document.getElementById('slide').offsetWidth;
        props.getWidthOfCard(cardWidth);
    }

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

    /**
    * Markup
    */

    return(
        <div className="related-post-card" id="slide">
            <div 
                className="related-post-card-image"
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
                        enterActive: 'related-post-card-image-hover-open',
                        exit: '',
                        exitActive: 'related-post-card-image-hover-close'
                    }}
                > 
                    <div className="related-post-card-image-hover">
                        <div className="related-post-card-image-hover-icons">
                            <FontAwesomeIcon 
                                icon={faLink} 
                                size="lg" 
                                color="white"
                                onClick={props.onClick}
                            />
                        </div>
                        <EW1/>
                        <div className="related-post-card-image-hover-icons">
                            <FontAwesomeIcon 
                                icon={faSearch} 
                                size="lg" color="white"
                                onClick={props.openGallery}
                            />
                        </div>
                    </div>
                </CSSTransition>
            </div>
            <EH1/>
            <H4 className="h4-white">{props.header}</H4>
            <div className="related-post-card-wrapper">
                <H6 className="h6-pink-grey-yanone-suva">{`${props.month} ${props.day}, ${props.year} | `}</H6> 
                <H6>{`${props.comments ? props.comments.length : 0} Comments`}</H6>
            </div>
        </div>
    );
}

export default RelatedPostCard;
 