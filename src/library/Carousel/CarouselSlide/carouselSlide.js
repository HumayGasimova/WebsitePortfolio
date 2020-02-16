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

import './carouselSlide.scss';

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
* Images
*/

import Image1 from '../../../images/17222.jpg';
import Image2 from '../../../images/40925569753_4d7f10ac9f_b.jpg';
import Image3 from '../../../images/caffeine-coffee-coffee-beans-cup-606545.jpg';
import Image4 from '../../../images/dessert.jpg';

/**
* CarouselSlide component definition and export
*/

export const CarouselSlide = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */
   
    const loadImage = (img) => {
        switch(img){
            case 'image1':
                return Image1;
            case 'image2':
                return Image2;
            case 'image3':
                return Image3;
            case 'image4':
                return Image4;
        }
    }

    /**
    * Markup
    */

    return(
        <div 
            className="carousel-slide"   
            style={{width: `${props.width}px`}}
        >
            <img src={loadImage(props.image)}/>
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
)(CarouselSlide);
 