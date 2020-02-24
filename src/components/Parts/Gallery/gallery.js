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
* Icons
*/

import { 
   faTimes,
   faArrowsAlt,
   faPlay,
   faChevronUp,
   faChevronDown
} from '@fortawesome/free-solid-svg-icons';

/**
* Styles
*/

import './gallery.scss';

/**
* Components
*/


/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Smoothie from '../../../images/smoothie-juice-raspberry-drink.jpg'

/**
* Utility
*/

import {
    H2,
    H3,
    H4,
    H5,
    EH0,
    EH1,
    EH2,
    EH4,
    EW1,
    Line2
} from '../../UtilityComponents';

/**
* Constants
*/

import {
    locationsAddresses
} from '../../../constants/locationsAddresses';

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
* Gallery component definition and export
*/

export const Gallery = (props) => {

    /**
    * State
    */

    const [currentTopPosition, setCurrentTopPosition] = useState(0);
    const [showUpArrow, setShowUpArrow] = useState(false);
    const [showDownArrow, setShowDownArrow] = useState(false);

    const getHeight = () => window.innerHeight;

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    });

    const {activeIndex, translate, transition} = state;

    /**
    * Methods
    */

    useEffect(() => {
        // props.initMenuDrinks(menuDrinksArray);
        let topPosition = document.body.scrollTop;
        let slider = document.getElementById('slider-content');
        let oldValue = 0;
        window.addEventListener('scroll', (e) => {
            let newValue = window.pageYOffset;
            console.log(newValue)

            //Subtract the two and conclude
            if(oldValue - newValue < 0){
                console.log("Down");
                if(activeIndex === props.gallery.imagesArray.length - 1){
                    return setState({
                        ...state,
                        translate: 0,
                        activeIndex: 0
                    })
                }
                
                setState({
                    ...state,
                    translate: (activeIndex + 1) * getHeight(),
                    activeIndex: activeIndex + 1
                })
            } else if(oldValue - newValue > 0){
                console.log("Up");
                if(activeIndex === 0){
                    return setState({
                        ...state,
                        translate: (props.gallery.imagesArray.length - 1) * getHeight(),
                        activeIndex: props.gallery.imagesArray.length - 1
                    })
                }
                
                setState({
                    ...state,
                    translate: (activeIndex - 1) * getHeight(),
                    activeIndex: activeIndex - 1
                })
            }
        
            // Update the old value
            oldValue  = newValue;
        })
        setCurrentTopPosition(topPosition);
        setState({
            ...state,
            activeIndex: props.gallery.currentId,
            translate: (props.gallery.currentId - 1) * getHeight(),
        })
    }, []);

    const handleMouseEnter = () => {
        setShowUpArrow(true);
        setShowDownArrow(true)
    }

    const handleMouseLeave = () => {
        setShowUpArrow(false);
        setShowDownArrow(false);
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
                return DefaultImage 
        }
    }

    const prevSlide = () => {
        if(activeIndex === 0){
            return setState({
                ...state,
                translate: (props.gallery.imagesArray.length - 1) * getHeight(),
                activeIndex: props.gallery.imagesArray.length - 1
            })
        }
        
        setState({
            ...state,
            translate: (activeIndex - 1) * getHeight(),
            activeIndex: activeIndex - 1
        })
    }

    const nextSlide = () => {
        if(activeIndex === props.gallery.imagesArray.length - 1){
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }
        
        setState({
            ...state,
            translate: (activeIndex + 1) * getHeight(),
            activeIndex: activeIndex + 1
        })
    }

    const renderSlider = () => {
        return(
            <div 
                className="gallery-slider-content" 
                id="slider-content"
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `translateY(-${translate}px)`,
                    // transition: `transform ${props.transition}s ease-out)`,
                    height: `${getHeight()}px`
                }}
            >{props.gallery.imagesArray.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        className="gallery-slide"
                        style={{height: `${getHeight()}px`}}
                    >
                        <img src={loadImage(el)}/>
                    </div>
                )
            })}</div>
        )
    }
    
    /**
    * Markup
    */

    return(
        <div 
            className="gallery" 
            // style={{top: `${currsentTopPosition}`}}
        >
            <div className="gallery-wrapper">
                <div className="gallery-buttons">
                    <div 
                        className="gallery-button-close"
                        onClick={props.closeGallery}                    
                    >
                        <FontAwesomeIcon 
                            icon={faTimes} 
                            size="sm" 
                            color="white" 
                            className="icon"
                        />
                    </div>
                    <div className="gallery-buttons-fullscreen">
                        <FontAwesomeIcon icon={faArrowsAlt} size="sm" color="white" className="icon"/>
                    </div>
                    <div className="gallery-buttons-play">
                        <FontAwesomeIcon icon={faPlay} size="sm" color="white" className="icon"/>
                    </div>
                </div>
                <div className="gallery-slider">
                    {showUpArrow ? 
                    <div 
                        className="gallery-slider-arrow-up"
                        onClick={prevSlide}
                        onMouseEnter={handleMouseEnter} 
                    >
                        <FontAwesomeIcon 
                            icon={faChevronUp} 
                            size="sm" 
                            color="white" 
                            className="icon"
                        />
                    </div> : null}
                    {renderSlider()}
                    {showDownArrow ? <div 
                        className="gallery-slider-arrow-down"
                        onClick={nextSlide}
                        onMouseEnter={handleMouseEnter} 
                    >
                        <FontAwesomeIcon 
                            icon={faChevronDown} 
                            size="sm" 
                            color="white" 
                            className="icon"
                        /> 
                    </div> : null}
                </div>
                <div className="gallery-small-slider"></div>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            gallery: Selectors.getGalleryState(state),
        };
    },
    (dispatch) => {
        return {
            closeGallery: bindActionCreators(Actions.closeGallery, dispatch),
        };
    }
)(Gallery);
 