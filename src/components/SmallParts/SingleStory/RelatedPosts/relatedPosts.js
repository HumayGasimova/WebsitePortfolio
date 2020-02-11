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

        // let slider = document.getElementById('slider');
        // let sliderItems = document.getElementById('slides');
        // let prev = document.getElementById('prev');
        // let next = document.getElementById('next');

        // slide(slider, sliderItems, prev, next);
    }, [props.id]);

    // const slide = (slider, sliderItems, prev, nex) => {
    //     let posX1 = 0;
    //     let posX2 = 0;
    //     let posInitial;
    //     let posFinal;
    //     let threshold = 100;
    //     let slides = sliderItems.getElementsByClassName('related-post-card');
    //     let relatedPostsArrayLength = props.relatedPosts.length;
    //     let slideSize = slides.length ? sliderItems.getElementsByClassName('related-post-card')[0].offsetWidth : null;
    //     let index = 0;
    //     let allowShift = true;
    //     props.addRelatedPostsElement();

    //     sliderItems.addEventListener('mousedown', (e) => dragStart(e, sliderItems, posInitial, posFinal, threshold, posX1));

    //     sliderItems.addEventListener('touchstart', (e) => dragStart(e, sliderItems, posInitial, posFinal, threshold, posX1));
    //     sliderItems.addEventListener('touched', (e) => dragEnd(e, sliderItems, posInitial, posFinal, threshold, slideSize, allowShift, index));
    //     sliderItems.addEventListener('touchmove', (e) => dragAction(e, sliderItems, posX1, posX2));
    //     sliderItems.addEventListener('transitionend', (e) => checkIndex(sliderItems, index, relatedPostsArrayLength, slideSize, allowShift));

    //     prev.addEventListener('click', () => shiftSlide(-1, null, sliderItems, posInitial, slideSize, allowShift, index));
    //     next.addEventListener('click', () => shiftSlide(1, null, sliderItems, posInitial, slideSize, allowShift, index));
    // }

    // const dragStart = (e, sliderItems, posInitial, posFinal, threshold, posX1, slideSize, allowShift, index) => {
    //     e = e || window.event;
    //     e.preventDefault();
    //     posInitial = sliderItems.offsetLeft;
    //     console.log(posInitial)
    //     if(e.type === 'touchstart'){
    //         posX1 = e.touches[0].clientX;
    //     }else {
    //         posX1 = e.clientX;
    //         document.onmouseup = () => dragEnd(sliderItems, posInitial, posFinal, threshold, slideSize, allowShift, index);
    //         document.onmousemove = () => dragAction(e, sliderItems, posInitial, posX1);
    //     }
    // }

    // const dragAction = (e, sliderItems, posX1, posX2) => {
    //     e = e || window.event;
      
    //     if(e.type === 'touchstart'){
    //         posX2 = posX1 - e.touches[0].clientX;
    //         posX1 = e.touches[0].clientX;
    //     }else {
    //         posX2 = posX1 - e.clientX;
    //         posX1 = e.clientX;
    //     }
    //     sliderItems.style.left = (sliderItems.offsetLeft - posX2) + "px";
    // }

    // const dragEnd = (sliderItems, posInitial, posFinal, threshold, slideSize, allowShift, index) => {
    //     posFinal = sliderItems.offsetLeft;
      
    //     if(posFinal - posInitial > threshold){
    //         shiftSlide(1, 'drag', sliderItems, posInitial, slideSize, allowShift, index);
    //     }else if (posFinal - posInitial < threshold){
    //         shiftSlide(-1, 'drag', sliderItems, posInitial, slideSize, allowShift, index);
    //     }else {
    //         sliderItems.style.left = (posInitial) + "px";
    //     }
    //     document.onmouseup = null;
    //     document.onmousemove = null;
    // }

    // const shiftSlide = (dir, action, sliderItems, posInitial, slideSize, allowShift, index) => {
    //     console.log("dd")
    //     sliderItems.classList.add('shifting');
    //     if(allowShift) {
    //         if(!action) {
    //             posInitial = sliderItems.offsetLeft;
    //         }
    //         if(dir === 1) {
    //             sliderItems.style.left = (posInitial - slideSize) + "px";
    //             console.log("length1",  sliderItems.style.left)
    //             index ++;
    //         } else if (dir === -1) {
    //             sliderItems.style.left = (posInitial + slideSize) + "px";
    //             console.log("length2",  sliderItems.style.left)
    //             index --;
    //         }
    //     }
    //     allowShift = false;
    // }

    // const checkIndex = (sliderItems, index, relatedPostsArrayLength, slideSize, allowShift) => {
    //     sliderItems.classList.remove("shifting");

    //     if(index === -1){
    //         sliderItems.style.left = -(relatedPostsArrayLength * slideSize) + "px";
    //         console.log("none", sliderItems.style.left)
    //         index = relatedPostsArrayLength - 1;
    //     }

    //     if(index === relatedPostsArrayLength){
    //         sliderItems.style.left = -(1 * slideSize) + "px";
    //         console.log("left", sliderItems.style.left)
    //         index = 0;
    //     }

    //     allowShift = true;
    // }

    const renderRelatedPostsCards = () => {
        return(
            <div className="related-post-cards" id="slides">{props.relatedPosts.map((el, i) => {
                return (
                    <div key={i} className="related-post-card">
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
 