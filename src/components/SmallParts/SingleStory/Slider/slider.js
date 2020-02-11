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

/**
* Components
*/

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Styles
*/

import './slider.scss';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Slider component definition and export
*/

export const Slider = (props) => {

    /**
    * State
    */

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
            slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
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
          
        function checkIndex (){
          items.classList.remove('shifting');
      
          if (index == -1) {
            items.style.left = -(slidesLength * slideSize) + "px";
            index = slidesLength - 1;
          }
      
          if (index == slidesLength) {
            items.style.left = -(1 * slideSize) + "px";
            index = 0;
          }
          
          allowShift = true;
        }
    }

    /**
    * Markup
    */

    return(
        <div 
            id="slider" 
            className="slider"
        >
            <div className="wrapper">
            <div 
                id="slides" 
                className="slides"
            >
                <span className="slide">Slide 1</span>
                <span className="slide">Slide 2</span>
                <span className="slide">Slide 3</span>
                <span className="slide">Slide 4</span>
                <span className="slide">Slide 5</span>
            </div>
            </div>
            <a id="prev" className="control prev"></a>
            <a id="next" className="control next"></a>
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
            // startInitRelatedPosts: bindActionCreators(Actions.startInitRelatedPosts, dispatch),
        };
    }
)(Slider);
 