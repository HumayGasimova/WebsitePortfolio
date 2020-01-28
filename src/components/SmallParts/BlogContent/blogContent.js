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
* Styles
*/

import './blogContent.scss';

/**
* Components
*/

import Button from '../../../library/Button/button';
import Spinner from '../../../library/Spinner/spinner';

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
* BlogContent component definition and export
*/

export const BlogContent = (props) => {

    /**
    * State
    */

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

    const renderText = (textArray, paragraphId) => {
        return(
            <div className="blog-content-paragraph-text">
                {textArray.map((el, i) => {
                    return(
                        <div key={i}className="blog-content-paragraph-text-item">
                            {el}
                            {paragraphId === 1 && i === 0 ? 
                                <div className="blog-content-image">
                                    <img src={loadImage(props.image)}/>
                                </div> 
                            : null}
                        </div>
                    )
                })}
            </div>
        )
    }

    const renderParagraph = () => {
        return(
            <div className="blog-content-paragraphs">
                {props.paragraphs.map((el, i) => {
                    return(
                        <div key={i} className="blog-content-paragraph">
                            <div className="blog-content-paragraph-title">
                                {el.title}
                            </div>
                            {renderText(el.text, el.id)}
                        </div>
                    )
                })}
            </div>
        )
    }

    /**
    * Markup
    */

    return(
        <>{props.paragraphs ? 
            <div className="blog-content">
                {renderParagraph()}
            </div> :
            <div className="blog-content-spinner"><Spinner/></div>
        }</>
    );
}

export default connect(
    (state) => {
        return {
            singleBlog: Selectors.getSingleBlogState(state),
        };
    },
    (dispatch) => {
        return {
            // startInitPortfolioSingle: bindActionCreators(Actions.startInitPortfolioSingle, dispatch),
        };
    }
)(BlogContent);
 