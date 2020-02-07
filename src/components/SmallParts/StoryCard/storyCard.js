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

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Components
*/

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Styles
*/

import './storyCard.scss';

/**
* Utility
*/

import {
    H2,
    H3,
    H4,
    H5,
    EH1,
    EH2,
    EH4,
    EW1,
    Line1,
    DoubleLine1
} from '../../UtilityComponents';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

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
                            <div className="story-card-image-hover-icons">
                                <FontAwesomeIcon icon={props.iconLink} size="lg" color="white"/>
                            </div>
                            <EW1/>
                            <div className="story-card-image-hover-icons">
                                <FontAwesomeIcon icon={props.iconSearch} size="lg" color="white"/>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
                <div className="story-card-description">
                    <H3 className="h3-animation">{props.header}</H3>
                    <EH1/>
                    <DoubleLine1/>
                    <EH1/>
                    <H5 textColor={Colors.EBB}>{props.description} [...]</H5>
                    <EH1/>
                    <div className="story-card-link">
                        <div className="story-card-link-left">
                            <H4 className="h4-animation-with-icon">Read more</H4>
                        </div>
                        <EW1/>
                        <FontAwesomeIcon icon={props.iconComments} size="sm" className="icon-comments"/>
                    </div>
                </div>
            </div>
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
)(StoryCard);
