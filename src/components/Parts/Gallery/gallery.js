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
    withRouter
} from 'react-router-dom';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import Fullscreen from "react-full-screen";

/**
* Icons
*/

import { 
   faTimes,
   faArrowsAlt,
   faPlay,
   faPause
} from '@fortawesome/free-solid-svg-icons';

/**
* Styles
*/

import './gallery.scss';

/**
* Components
*/

import Slider from '../../SmallParts/Slider/slider';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Gallery component definition and export
*/

export const Gallery = (props) => {

    /**
    * State
    */

    const [autoPlayButton, setAutoPlayButton] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);

    /**
    * Methods
    */

   

    useEffect(() => {
        props.history.listen((location, action) => {
            props.closeGallery();
        });
        // props.initMenuDrinks(menuDrinksArray);
        // let topPosition = document.body.scrollTop;
        // let slider = document.getElementById('slider-content');
        // let oldValue = 0;
        // window.addEventListener('scroll', (e) => {
        //     let newValue = window.pageYOffset;
        //     console.log(newValue)

        //     //Subtract the two and conclude
        //     if(oldValue - newValue < 0){
        //         console.log("Down");
        //         if(activeIndex === props.gallery.imagesArray.length - 1){
        //             return setState({
        //                 ...state,
        //                 translate: 0,
        //                 activeIndex: 0
        //             })
        //         }
        //         console.log(activeIndex)
        //         setState({
        //             ...state,
        //             translate: (activeIndex + 1) * getHeight(),
        //             activeIndex: activeIndex + 1
        //         })
        //     } else if(oldValue - newValue > 0){
        //         console.log("Up");
        //         if(activeIndex === 0){
        //             return setState({
        //                 ...state,
        //                 translate: (props.gallery.imagesArray.length - 1) * getHeight(),
        //                 activeIndex: props.gallery.imagesArray.length - 1
        //             })
        //         }
        //         console.log(activeIndex)
        //         setState({
        //             ...state,
        //             translate: (activeIndex - 1) * getHeight(),
        //             activeIndex: activeIndex - 1
        //         })
        //     }
        
        //     // Update the old value
        //     oldValue  = newValue;
        // })
        // setCurrentTopPosition(topPosition);
        // setState({
        //     ...state,
        //     activeIndex: props.gallery.currentId,
        //     translate: (props.gallery.currentId - 1) * getHeight(),
        // })
    }, []);

    const autoPlayOnClick = () => {
        setAutoPlayButton(!autoPlayButton)
    }
    
    /**
    * Markup
    */

    return(
        <Fullscreen
            enabled={fullScreen}
        >
            <div 
                className="gallery" 
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
                        <div 
                            className="gallery-buttons-fullscreen"
                            onClick={() => setFullScreen(!fullScreen)}
                        >
                            <FontAwesomeIcon 
                                icon={faArrowsAlt} 
                                size="sm" 
                                color="white" 
                                className="icon"
                            />
                        </div>
                        <div 
                            className="gallery-buttons-play"
                            onClick={autoPlayOnClick}
                        >
                            {!autoPlayButton ? 
                                <FontAwesomeIcon 
                                    icon={faPlay} 
                                    size="sm" 
                                    color="white" 
                                    className="icon"
                                /> : 
                                <FontAwesomeIcon 
                                    icon={faPause} 
                                    size="sm" 
                                    color="white" 
                                    className="icon"
                                />
                            }
                        </div>
                    </div>
                    <div className="gallery-slider">
                        <Slider
                            currentSlideId={props.gallery.currentId}
                            autoPlay={autoPlayButton}
                        />
                    </div>
                    <div className="gallery-small-slider">
                    </div>
                </div>
            </div>
        </Fullscreen>
    );
}

export default connect(
    (state) => {
        return {
            gallery: Selectors.getGalleryState(state)
        };
    },
    (dispatch) => {
        return {
            closeGallery: bindActionCreators(Actions.closeGallery, dispatch)
        };
    }
)(withRouter(Gallery));
 