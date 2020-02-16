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

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Styles
*/

import './carouselArrow.scss';

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
* Icons
*/

import { 
    faArrowAltCircleLeft,
    faArrowAltCircleRight
} from '@fortawesome/free-solid-svg-icons';

/**
* CarouselArrow component definition and export
*/

export const CarouselArrow = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    const loadIconName = (name) => {
        switch(name){
            case 'left':
                return faArrowAltCircleLeft;
            case 'right':
                return faArrowAltCircleRight;
        }
    }

    /**
    * Markup
    */

    return(
            <div className={props.name === "left" ? "carousel-arrow-left" : "carousel-arrow-right"}>
                <FontAwesomeIcon 
                    icon={loadIconName(props.name)} 
                    size='2x'
                    // color="white"
                    onClick={props.onClick}
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
)(CarouselArrow);
 