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
* Icons
*/

import { 
    faArrowAltCircleLeft,
    faArrowAltCircleRight
} from '@fortawesome/free-solid-svg-icons';

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

import './sliderOld.scss';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* SliderOld component definition and export
*/

export const SliderOld = () => {

    /**
    * Methods
    */

    useEffect(() => {
        var slider = document.getElementById('slider'),
        sliderItems = document.getElementById('slides'),
        prev = document.getElementById('prev'),
        next = document.getElementById('next');

        slide(slider, sliderItems, prev, next);
    }, [])


    const slide = (wrapper, items, prev, next) => {
        var posX1 = 0,
            posX2 = 0,
            posInitial,
            posFinal,
            threshold = 100,
            slides = items.getElementsByClassName('slide'),
            slidesLength = slides.length,
            slideSize = slides.length ? items.getElementsByClassName('slide')[0].offsetWidth : null,
            firstSlide = slides[0],
            lastSlide = slides[slidesLength - 1],
            cloneFirst = firstSlide.cloneNode(true),
            cloneLast = lastSlide.cloneNode(true),
            index = 0,
            allowShift = true;
        
        // Clone first and last slide
        items.appendChild(cloneFirst);
        items.insertBefore(cloneLast, firstSlide);
        wrapper.classList.add('loaded');
        
        // Mouse events
        items.onmousedown = dragStart;
        
        // Touch events
        items.addEventListener('touchstart', dragStart);
        items.addEventListener('touchend', dragEnd);
        items.addEventListener('touchmove', dragAction);
        
        // Click events
        prev.addEventListener('click', function () { shiftSlide(-1) });
        next.addEventListener('click', function () { shiftSlide(1) });
        
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
            } else if (dir == -1) {
              items.style.left = (posInitial + slideSize) + "px";
              index--;      
            }
          };
          
          allowShift = false;
        }
          
        function checkIndex (e){
          items.classList.remove('shifting');
      
          if (index == -1) {
            items.style.left = -(slidesLength * slideSize) + "px";
            index = slidesLength - 1;
          }
      
          if (index == slidesLength) {
            items.style.left = -(1 * slideSize) + "px";
            index = 0;
          }
          // console.log(index)
          allowShift = true;
        }
    }

    // const renderSlides = () => {
    //     return(
    //         <div id="slides" className="slides">{props.slidesArray.map((el, i) => {
    //             return (
    //                 <div className="slide">
    //                     <RelatedPostCard
    //                         key={i}
    //                         image={el.image}
    //                         header={el.header}
    //                         day={el.day}
    //                         month={el.month}
    //                         year={el.year}
    //                         comments={el.comments}
    //                     />
    //                 </div>
    //             )
    //         })}</div>
    //     )
    // }

    /**
    * Markup
    */

    return(
        <div 
            id="slider" 
            className="slider"
        >
            <div className="related-posts-arrow-left" id="prev">
                <FontAwesomeIcon 
                    icon={faArrowAltCircleLeft} 
                    size="lg" 
                    color="white"
                />
            </div>
            <div className="wrapper">
                <div 
                    id="slides" 
                    className="slides"
                >
                    {/* <span className="slide">Slide 1</span>
                    <span className="slide">Slide 2</span>
                    <span className="slide">Slide 3</span>
                    <span className="slide">Slide 4</span>
                    <span className="slide">Slide 5</span> */}
                    {renderSlides()}
                </div>
            </div>
            <div className="related-posts-arrow-right" id="next">
                <FontAwesomeIcon 
                    icon={faArrowAltCircleRight} 
                    size="lg" 
                    color="white"
                />
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // relatedPosts: Selectors.getRelatedPostsState(state),
        };
    },
    (dispatch) => {
        return {
            addRelatedPostsElement: bindActionCreators(Actions.addRelatedPostsElement, dispatch),
        };
    }
)(SliderOld);
 