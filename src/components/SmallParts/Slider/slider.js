/**
* Libraries
*/

import React, {
    useState,
    useEffect,
    useRef
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
   faChevronUp,
   faChevronDown
} from '@fortawesome/free-solid-svg-icons';

/**
* Styles
*/

import './slider.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Hooks
*/

import {
    useInterval
} from '../../../Hooks/useInterval';

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
* Slider component definition and export
*/

export const Slider = (props) => {

    const getHeight = () => window.innerHeight;
    
    const [slides, setSlides] = useState([])

    const [showUpArrow, setShowUpArrow] = useState(false);
    const [showDownArrow, setShowDownArrow] = useState(false);

    const [state, setState] = useState({
        activeIndex: 0,
        translate: getHeight(),
        transition: 0.45,
        _slides: []
    });

    const {activeIndex, translate, transition, _slides} = state;

    const autoPlayRef = useRef();
    const transitionRef = useRef();
    const resizeRef = useRef();

    /**
    * Methods
    */

    useEffect(() => {
        // props.startInitRelatedPosts(props.id);
        let slidesArray = [...props.gallery.imagesArray];
        setSlides(slidesArray);
        // if(props.id){
        //     props.addRelatedPostsElement();
        // }

        if(props.gallery.imagesArray.length !== 0){
            setState({
                ...state,
                _slides: [slides[slides.length - 1], slides[0], slides[1]]
            })
        }

        return () => {
            setState({
                activeIndex: 0,
                translate: getHeight(),
                transition: 0.45,
                _slides: []
            });
            setSlides([]);
            // props.startInitRelatedPosts(null);
        };
    }, [props.gallery.imagesArray.length, slides.length]);

    useEffect(() => {
        // autoPlayRef.current = nextSlide;
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    })

    useEffect(() => {
        if(transition === 0) {
            setState({
                ...state,
                transition: 0.45
            })
        }
    }, [transition])

    useEffect(() => {
        // const play = () => {
        //     autoPlayRef.current();
        // }

        const smooth = e => {
            if(e.target.className.includes('slider-content')){
                transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current()
        }

        let interval = null;

        window.addEventListener('transitionend', smooth);
        window.addEventListener('resize', resize);

        // if(props.autoPlay){
        //     interval = setInterval(play, 3000);
        //     // return () => clearInterval(interval);
        // }

        return () => {
            window.removeEventListener('transitionend', smooth);
            window.removeEventListener('resize', resize);

            // setState({
            //     activeIndex: props.currentSlideId - 1,
            //     translate: getHeight(),
            //     transition: 0.45,
            //     _slides: []
            // })
            
            // if(props.autoPlay){
                // clearInterval(interval);
            // }
        };
    }, [])

    useInterval(() => {
        nextSlide();
    }, props.autoPlay ? 3000 : null)
    
    const handleResize = () => {
        setState({
            ...state,
            translate: getHeight(),
            transition: 0
        })
    }

    const smoothTransition = () => {
        let _slides = [];
        
            //We're at the last slide
            if(activeIndex === slides.length - 1)
                _slides = [slides[slides.length - 2], slides[slides.length - 1], slides[0]];
            //We're back at the first slide. Just reset to how it was on initial render.
            else if (activeIndex === 0) _slides = [slides[slides.length - 1], slides[0], slides[1]]
            // Create an array of the previous last slide, and the next two slides that follow it.
            else _slides = slides.slice(activeIndex - 1, activeIndex + 2)

        setState({
            ...state,
            _slides,
            transition: 0,
            translate: getHeight()
        })
        
    }

    const prevSlide = () => {
        setState({
            ...state,
            translate: 0,
            activeIndex: activeIndex === 0 ? slides.length - 1 : activeIndex - 1
        })
    }

    const nextSlide = () => {
        setState({
            ...state,
            translate: translate + getHeight(),
            activeIndex: activeIndex === slides.length - 1 ? 0 : activeIndex + 1
        })
    }

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

    const renderSlider = () => {
        return(
            <div 
                className="slider-content" 
                id="slider-content"
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `translateY(-${translate}px)`,
                    transition: `transform ${transition}s ease-out`,
                    height: `${getHeight()}px`
                }}
            >{_slides.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        className="slide"
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
        <>
            {showUpArrow ? 
            <div 
                className="slider-arrow-up"
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
                className="slider-arrow-down"
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
        </>
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
            // closeGallery: bindActionCreators(Actions.closeGallery, dispatch),
        };
    }
)(Slider);
 