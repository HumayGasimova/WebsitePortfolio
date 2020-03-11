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

import './carouselContent.scss';

/**
* Components
*/


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
* CarouselContent component definition and export
*/

export const CarouselContent = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */
   
    /**
    * Markup
    */

    return(
            <div 
                className="carousel-content" 
                style={{
                    transform: `translateX(-${props.translate}px)`,
                    transition: `transform ${props.transition}s ease-out`,
                    width: `${props.width}px`
                }}
            >
                {props.children}
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
)(CarouselContent);
 