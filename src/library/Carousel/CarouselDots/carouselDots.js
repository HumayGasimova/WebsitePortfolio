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

import './carouselDots.scss';

/**
* Components
*/

import CarouselDot from './CarouselDot/carouselDot';

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

// import {
//     storiesArray
// } from '../constants/storiesArray';

/**
* CarouselDots component definition and export
*/

export const CarouselDots = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */
   
    const renderDots = () => {
        return(<>{props.slides.map((el, i) => {
            return(
                <CarouselDot key={i} active={props.activeIndex === i} />
            )
        })}</>)
    }

    /**
    * Markup
    */

    return(
            <div className="carousel-dots">
                {renderDots()}
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
)(CarouselDots);
 