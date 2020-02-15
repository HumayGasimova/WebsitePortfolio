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
        translate: 0,
        transition: 0.45
    });

    const {translate, transition} = state;

    /**
    * Methods
    */
   
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
            <CarouselContent
                translate={translate}
                transition={transition}
                width={getWidth() * slides.length}
            >
                {renderCarouselSlides()}
            </CarouselContent>
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
 