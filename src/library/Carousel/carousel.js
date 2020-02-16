/**
* Libraries
*/

import React, {
    useEffect,
    useState
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

    const getWidth = () => window.innerWidth;

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    });

    const {activeIndex, translate, transition} = state;

    /**
    * Methods
    */

    const prevSlide = () => {
        if(activeIndex === 0){
            return setState({
                ...state,
                translate: (slides.length - 1) * getWidth(),
                activeIndex: slides.length - 1
            })
        }

        setState({
            ...state,
            translate: (activeIndex - 1) * getWidth(),
            activeIndex: activeIndex - 1
        })
    }

    const nextSlide = () => {
        if(activeIndex === slides.length - 1){
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }

        setState({
            ...state,
            translate: (activeIndex + 1) * getWidth(),
            activeIndex: activeIndex + 1
        })
    }
   
    const renderCarouselSlides = () => {
        return(
            <>{slides.map((el, i) => {
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
                width={getWidth() * slides.length}
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
 