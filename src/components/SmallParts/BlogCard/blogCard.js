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

import './blogCard.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Components
*/

/**
* Icons
*/

import { 
  faComment
} from '@fortawesome/free-solid-svg-icons';

/**
* Constants
*/

import {
    feedbacksArray
} from '../../../constants/feedbacks';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Image1 from '../../../images/blogImages/roses-1566792_960_720.jpg';
import Image2 from '../../../images/blogImages/antique_watch.jpg';
import Image3 from '../../../images/blogImages/brush.jpg';
import Image4 from '../../../images/blogImages/white-daisy-flowers-on-chocolate-bar.jpg';
import Image5 from '../../../images/blogImages/cosmetology-oil-cosmetic-calendula-cosmetics.jpg';
import Image6 from '../../../images/blogImages/flatlay-makeup-beauty-cosmetics.jpg';
import Image7 from '../../../images/blogImages/mac-2585220_1280.jpg';
import Image8 from '../../../images/blogImages/music-1874621_960_720.jpg';
import Image9 from '../../../images/blogImages/nail-4682903_960_720.jpg';
import Image10 from '../../../images/blogImages/closed-up-photo-of-assorted-cosmetic-products.jpg';
import Image11 from '../../../images/blogImages/pink-gerbera-daisies-on-brown-hardbound-book-on-brown-wooden-bench.jpg';
import Image12 from '../../../images/blogImages/tea-4289171_960_720.jpg';
import Image13 from '../../../images/blogImages/cosmetic-oil-of-calendula.jpg';
import Image14 from '../../../images/blogImages/pink-floral-wooden-rack-filled-with-make-up-brush-lot.jpg';

/**
* BlogCard component definition and export
*/

export const BlogCard = (props) => {
    
    /**
    * Methods
    */
    
    const loadImage = (img) => {
        switch(img) {
            case 'image1':
                return Image1;
            case 'image2':
                return Image2;  
            case 'image3':
                return Image3;   
            case 'image4':
                return Image4;
            case 'image5':
                return Image5;  
            case 'image6':
                return Image6; 
            case 'image7':
                return Image7;
            case 'image8':
                return Image8;  
            case 'image9':
                return Image9;   
            case 'image10':
                return Image10;
            case 'image11':
                return Image11;  
            case 'image12':
                return Image12; 
            case 'image13':
                return Image13;  
            case 'image14':
                return Image14;
        }
    }

    /**
    * Markup
    */

    return(
        <div className="blog-card" onClick={props.onClick}>
            <div className="blog-card-image">
                <img src={loadImage(props.image)}/>
            </div>
            <div className="blog-card-wrapper">
                <div className="blog-card-info">
                    <div className="blog-card-date">{props.date}</div>
                    <div className="blog-card-author">{props.author}</div>
                    <div className="blog-card-number-of-comments">
                        <FontAwesomeIcon icon={faComment} size="sm" className="icon-comment"/>
                        {props.numberOfComments}
                    </div>
                </div>
                <div className="blog-card-text">{props.text}</div>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // feedbacksToShow: Selectors.getFeedbacksToShowState(state),
        };
    },
    (dispatch) => {
        return {
            // initFeedbacks: bindActionCreators(Actions.initFeedbacks, dispatch),
        };
    }
)(BlogCard);
 