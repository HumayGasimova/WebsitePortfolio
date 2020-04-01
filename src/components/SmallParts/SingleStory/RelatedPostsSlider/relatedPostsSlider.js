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
    faArrowAltCircleLeft,
    faArrowAltCircleRight
} from '@fortawesome/free-solid-svg-icons';

/**
* Styles
*/

import './relatedPostsSlider.scss';

/**
* Components
*/

import RelatedPostCard from '../RelatedPostCard/relatedPostCard';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Hooks
*/

import {
    useInterval
} from '../../../../Hooks/useInterval';

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
    EW2,
    Line1
} from '../../../UtilityComponents';

/**
* RelatedPostsSlider component definition and export
*/

export const RelatedPostsSlider = (props) => {

    const getHeight = () => window.innerHeight;

    const slides = [...props.relatedPosts];

    const firstSlide = slides[0];
    const secondSlide = slides[1];
    const lastSlide = slides[slides.length - 1];

    const [state, setState] = useState({
        activeIndex: 0,
        translate: getHeight(),
        transition: 0.45,
        _slides: [lastSlide, firstSlide, secondSlide]
    });

    const {activeIndex, translate, transition, _slides} = state;

    const autoPlayRef = useRef();
    const transitionRef = useRef();
    const resizeRef = useRef();

    /**
    * Methods
    */

    useEffect(() => {
        props.startInitRelatedPosts(props.id);
        if(props.id){
            props.addRelatedPostsElement();
        }
    }, [props.id, props.relatedPosts.length]);

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

        const transitionEnd = window.addEventListener('transitionend', smooth);
        const onResize = window.addEventListener('resize', resize);

        // if(props.autoPlay){
        //     interval = setInterval(play, 3000);
        //     // return () => clearInterval(interval);
        // }

        return () => {
            window.removeEventListener('transitionend', transitionEnd);
            window.removeEventListener('resize', onResize);

            setState({
                activeIndex: props.currentSlideId - 1,
                translate: getHeight(),
                transition: 0.45,
                _slides: [lastSlide, firstSlide, secondSlide]
            })
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
                _slides = [slides[slides.length - 2], lastSlide, firstSlide];
            //We're back at the first slide. Just reset to how it was on initial render.
            else if (activeIndex === 0) _slides = [lastSlide, firstSlide, secondSlide]
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

    const renderRelatedPostsSlider = () => {
        // return(
        //     <div 
        //         className="related-posts-slider-content" 
        //         id="related-posts-slider-content"
        //         style={{
        //             transform: `translateY(-${translate}px)`,
        //             transition: `transform ${transition}s ease-out`,
        //             height: `${getHeight()}px`
        //         }}
        //     >{_slides.map((el, i) => {
        //         return (
        //             <RelatedPostCard
        //                 key={i}
        //                 image={el.image}
        //                 header={el.header}
        //                 day={el.day}
        //                 month={el.month}
        //                 year={el.year}
        //                 comments={el.comments}
        //             />
        //         )
        //     })}</div>
        // )
    }

    /**
    * Markup
    */

    return(
        <div className="related-posts">
            <EH2/>
            <H3>RELATED POSTS</H3>
            <EH2/>
            <div className="related-posts-wrapper" id="slider">
                <div className="related-posts-arrow-left" onClick={prevSlide}>
                    <FontAwesomeIcon 
                        icon={faArrowAltCircleLeft} 
                        size="lg" 
                        color="white"
                    />
                </div>
                <div className="related-posts-inner-wrapper" id="slider">
                    {renderRelatedPostsSlider()}
                </div>
                <div className="related-posts-arrow-right" onClick={nextSlide}>
                    <FontAwesomeIcon 
                        icon={faArrowAltCircleRight} 
                        size="lg" 
                        color="white"
                    />
                </div>
                {console.log(slides)}
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            relatedPosts: Selectors.getRelatedPostsState(state),
        };
    },
    (dispatch) => {
        return {
            startInitRelatedPosts: bindActionCreators(Actions.startInitRelatedPosts, dispatch),
            addRelatedPostsElement: bindActionCreators(Actions.addRelatedPostsElement, dispatch),
        };
    }
)(RelatedPostsSlider);
 