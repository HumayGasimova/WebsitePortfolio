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

        let slider = document.getElementById('slider');
        let sliderItems = document.getElementById('slides');
        let prev = document.getElementById('prev');
        let next = document.getElementById('next');

        slide(slider, sliderItems, prev, next);



    }, [props.id]);

    const slide = (slider, sliderItems, prev, nex) => {
        let isDown = false;
        let posX1 = 0;
        let posX2 = 0;
        let posInitial;
        let posFinal;
        let threshold;

        let slides = sliderItems.getElementsByClassName('related-post-card');
        let relatedPostsArray = props.relatedPosts;
        let relatedPostsArrayLength = relatedPostsArray.length;
        let slideSize = slides.length ? slides[0].offsetWidth : null;
        let index = 0;
        let allowShift = true;
        props.addRelatedPostsElement();
   
        sliderItems.addEventListener('mousedown', (e) => {
            isDown = true;
        console.log("mousedown")
        });
        sliderItems.addEventListener('mouseleave', () => {
            isDown = false
            console.log("mouseleave")
        });
        sliderItems.addEventListener('mouseup', () => {
            isDown = false
            console.log("mouseup")
        });
        sliderItems.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            console.log("mousemove")
            // feedbacksDiv.scrollLeft = (scrollLeft - walk) * 4; // scrolling with speed
            // console.log("mouseMove", isDown, {scrollLeft,startX,x,walk});
            // console.log("mouseMove", isDown, {scrollLeft,startX,x,walk});
        });

        // let slides = sliderItems.getElementsByClassName('related-post-card');
        // let slidesLength = slides.length;
        // let slideSize = slides.length ? slides[0].offsetWidth : null;
        // let firstSlide = slides[0];
        // let lastSlide = slides[slidesLength - 1];
        // let cloneFirst = firstSlide ? firstSlide.cloneNode(true) : firstSlide;
        // let cloneLast = lastSlide ? lastSlide.cloneNode(true) : lastSlide;
        // let index = 0;
        // let allowShift = true;

        // console.log(cloneFirst)
        // sliderItems.appendChild(cloneFirst);
        // sliderItems.insertBefore(cloneLast, firstSlide);
    }

    const renderRelatedPostsCards = () => {
     
        return(
            <div className="related-post-cards" id="slides">{props.relatedPosts.map((el, i) => {
                return (
                    <RelatedPostCard
                        key={i}
                        image={el.image}
                        header={el.header}
                        day={el.day}
                        month={el.month}
                        year={el.year}
                        comments={el.comments}
                    />
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

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
 