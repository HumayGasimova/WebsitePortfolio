/**
* Libraries
*/

import React, {
    useEffect,
    useState,
    useRef
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Styles
*/

import './carousel.scss';

/**
* Components
*/

import CarouselContent from './CarouselContent/carouselContent';
import CarouselSlide from './CarouselSlide/carouselSlide';
import CarouselArrow from './CarouselArrow/carouselArrow';
import CarouselDots from './CarouselDots/carouselDots';

/**
* Actions
*/

// import * as Actions from '../actions';

/**
* Selectors
*/

// import * as Selectors from '../reducers/selectors';

/**
* Constants
*/

import {
    slides
} from '../../constants/slides';

/**
* Carousel component definition and export
*/

export const Carousel = (props) => {

    /**
    * State
    */

    const firstSlide = slides[0];
    const secondSlide = slides[1]
    const lastSlide = slides[slides.length - 1];

    const getWidth = () => window.innerWidth;

    const [state, setState] = useState({
        activeIndex: 0,
        translate: getWidth(),
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
        autoPlayRef.current = nextSlide;
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
        const play = () => {
            autoPlayRef.current();
        }

        const smooth = e => {
            if(e.target.className.includes('carousel-content')){
                transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current()
        }

        let interval = null;

        window.addEventListener('transitionend', smooth);
        window.addEventListener('resize', resize);

        if(props.autoPlay){
            interval = setInterval(play, 3000);
            return () => clearInterval(interval);
        }
        return () => {
            window.removeEventListener('transitionend', smooth);
            window.removeEventListener('resize', resize);

            if(props.autoPlay){
                clearInterval(interval);
            }
        };
    }, [props.autoPlay])

    const handleResize = () => {
        setState({
            ...state,
            translate: getWidth(),
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
            translate: getWidth()
        })
    }

    const prevSlide = () => {
        setState({
            ...state,
            translate: 0,
            activeIndex: activeIndex === 0 ? slides.length - 1: activeIndex - 1
        })
    }

    const nextSlide = () => {
        setState({
            ...state,
            translate: translate + getWidth(),
            activeIndex: activeIndex === slides.length - 1 ? 0 : activeIndex + 1
        })
    }
   
    const renderCarouselSlides = () => {
        return(
            <>{_slides.map((el, i) => {
                return(
                    <CarouselSlide
                        key={i}
                        image={el.image}
                        width={getWidth()}
                    />
                )
            })}</>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="carousel-slider">
            <CarouselArrow 
                name="left"
                onClick={prevSlide}
            />
            <CarouselContent
                translate={translate}
                transition={transition}
                width={getWidth() * _slides.length}
            >
                {renderCarouselSlides()}
            </CarouselContent>
            <CarouselArrow 
                name="right"
                onClick={nextSlide}
            />
            <CarouselDots 
                slides={slides} 
                activeIndex={activeIndex}
            />
            {console.log(_slides.length)}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // singleStory: Selectors.getSingleStoryState(state),
            // dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
            // startInitStories: bindActionCreators(Actions.startInitStories, dispatch),
            // initSingleStory: bindActionCreators(Actions.initSingleStory, dispatch),
        };
    }
)(Carousel);
 