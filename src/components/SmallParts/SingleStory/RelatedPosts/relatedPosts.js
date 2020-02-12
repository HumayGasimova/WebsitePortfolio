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
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Components
*/

import RelatedPostCard from '../RelatedPostCard/relatedPostCard';
import Slider from '../Slider/slider';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Styles
*/

import './relatedPosts.scss';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Icons
*/

import { 
    faArrowAltCircleLeft,
    faArrowAltCircleRight
} from '@fortawesome/free-solid-svg-icons';

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
* RelatedPosts component definition and export
*/

export const RelatedPosts = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    useEffect(() => {
        props.startInitRelatedPosts(props.id);
        props.addRelatedPostsElement();
        let slider = document.getElementById('slider');
        let sliderItems = document.getElementById('slides');
        let prev = document.getElementById('prev');
        let next = document.getElementById('next');

        slide(slider, sliderItems, prev, next);
    }, [props.id]);

    const slide = (wrapper, items, prev, next) => {
        var posX1 = 0,
            posX2 = 0,
            posInitial,
            posFinal,
            threshold = 100,
            slides = items.getElementsByClassName('related-post-cards'),
            slidesLength = props.relatedPosts.length,
            slideSize = slidesLength !== 0 ? document.getElementById('slide').offsetWidth : null,
            // firstSlide = slides[0],
            // lastSlide = slides[slidesLength - 1],
            // cloneFirst = firstSlide.cloneNode(true),
            // cloneLast = lastSlide.cloneNode(true),
            index = 0,
            allowShift = true;
        console.log(slidesLength)
        
        console.log(props.relatedPosts.length)
        // Clone first and last slide
        // items.appendChild(cloneFirst);
        // items.insertBefore(cloneLast, firstSlide);
        // wrapper.classList.add('loaded');

        // Mouse events
        items.onmousedown = dragStart;

        // Touch events
        // items.addEventListener('touchstart', dragStart);
        // items.addEventListener('touchend', dragEnd);
        // items.addEventListener('touchmove', dragAction);

        // Click events
        prev.addEventListener('click', () => { shiftSlide(-1) });
        next.addEventListener('click', () => { shiftSlide(1) });

        // Transition events
        items.addEventListener('transitionend', checkIndex);

        function dragStart (e) {
            e = e || window.event;
            e.preventDefault();
            posInitial = items.offsetLeft;
            
            if (e.type == 'touchstart') {
                posX1 = e.touches[0].clientX;
            } else {
                posX1 = e.clientX;
                document.onmouseup = dragEnd;
                document.onmousemove = dragAction;
            }
        }

        function dragAction (e) {
            e = e || window.event;
            
            if (e.type == 'touchmove') {
                posX2 = posX1 - e.touches[0].clientX;
                posX1 = e.touches[0].clientX;
            } else {
                posX2 = posX1 - e.clientX;
                posX1 = e.clientX;
            }
            items.style.left = (items.offsetLeft - posX2) + "px";
        }

        function dragEnd (e) {
            posFinal = items.offsetLeft;
            if (posFinal - posInitial < -threshold) {
                shiftSlide(1, 'drag');
            } else if (posFinal - posInitial > threshold) {
                shiftSlide(-1, 'drag');
            } else {
                items.style.left = (posInitial) + "px";
            }

            document.onmouseup = null;
            document.onmousemove = null;
        }

        function shiftSlide(dir, action) {
            items.classList.add('shifting');
            
            if (allowShift) {
                if (!action) { posInitial = items.offsetLeft; }

                if (dir == 1) {
                    items.style.left = (posInitial - slideSize) + "px";
                    index++;      
                    console.log("INdex1",index)
                } else if (dir == -1) {
                    items.style.left = (posInitial + slideSize) + "px";
                    index--;  
                    console.log("INdex2", index)
                }
            };
            
            allowShift = false;
        }
        
        function checkIndex(e) {
            items.classList.remove('shifting');
            if (index == -1) {
                items.style.left = -(slidesLength * slideSize) + "px";
                index = slidesLength - 1;
                console.log("index2",index)
            }

            if (index == slidesLength) {
                items.style.left = -(1 * slideSize) + "px";
                index = 0;
                console.log("index3",index)
            }
            console.log("index",slidesLength ,index)
            allowShift = true;
        }
    }

    

    const renderRelatedPostsCards = () => {
        return(
            <div className="related-post-cards" id="slides">{props.relatedPosts.map((el, i) => {
                return (
                    <div key={i} className="related-post-card" id="slide">
                        <RelatedPostCard
                            key={i}
                            image={el.image}
                            header={el.header}
                            day={el.day}
                            month={el.month}
                            year={el.year}
                            comments={el.comments}
                        />
                    </div>
                )
            })}</div>
            // <div className="related-post-cards" id="slides">
            //     <span className="slide">Slide 1</span>
            //     <span className="slide">Slide 2</span>
            //     <span className="slide">Slide 3</span>
            //     <span className="slide">Slide 4</span>
            //     <span className="slide">Slide 5</span>
            // </div>
          
        )
    }

    /**
    * Markup
    */

    // return(
    //     <div className="related-posts">
    //         <EH2/>
    //         <H3>RELATED POSTS</H3>
    //         <EH2/>
    //         <Slider
    //             slidesArray={props.relatedPosts}
    //         />
    //     </div>
    // );

    return(
        <div className="related-posts">
            <EH2/>
            <H3>RELATED POSTS</H3>
            <EH2/>
            <div className="related-posts-wrapper" id="slider">
                <div className="related-posts-arrow-left" id="prev">
                    <FontAwesomeIcon 
                        icon={faArrowAltCircleLeft} 
                        size="lg" 
                        color="white"
                    />
                </div>
                <div className="related-posts-inner-wrapper">
                   
                    {renderRelatedPostsCards()}
                    
                </div>
                <div className="related-posts-arrow-right" id="next">
                    <FontAwesomeIcon 
                        icon={faArrowAltCircleRight} 
                        size="lg" 
                        color="white"
                    />
                </div>
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
)(RelatedPosts);
 