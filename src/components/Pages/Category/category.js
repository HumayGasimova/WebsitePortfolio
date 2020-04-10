/**
* Libraries
*/

import React, {
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

import './category.scss';

/**
* Components
*/

import CategoryStories from '../../Parts/CategoryStories/categoryStories';
import Footer from '../../Parts/Footer/footer';
import Gallery from '../../Parts/Gallery/gallery';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Background from '../../../images/700_FO36064926_7b9fb5c531d9ef758ada11137a039fa4.jpg';

/**
* Utility
*/

import {
    H1,
    H2,
    H3,
    H4,
    H5,
    EH1,
    EH2,
    EW1,
    Line1,
    Line2
} from '../../UtilityComponents';

/**
* Category component definition and export
*/

export const Category = (props) => {

    /**
    * Methods
    */

    useEffect(()=>{
        // props.initCategoryStories(props.location.state ? props.location.state.obj : {});

        if(props.location.state){
            let categoryImages = [];
            props.location.state.obj.storiesArrayOfCategories.map((el, i) => {
                el.storiesArray.map((el, i) => {
                    categoryImages.push(el);
                })
            });
                // console.log( props.location.state.obj);
                // console.log(categoryImages);
            props.addGalleryImages([], 'clear');
            props.initCategoryStories(props.location.state.obj);
            props.addGalleryImages(categoryImages, 'Category');
        }
        window.scrollTo(0, 0);
    }, []);

    /**
    * Markup
    */

    return(
        <>
            <div className="category-cover-wrapper">
                <div className="category-wrapper-backgroud-div"/>
            </div>
            <div className="category-header-text">
                <H1 className="h1-center">{props.categoryStories.category ? props.categoryStories.category.toUpperCase() : null}</H1>
                <EH1/>
                <H4 className="h4-white-centered">
                    {`Home / ${props.categoryStories.category}`}
                </H4>
            </div>
            <div className="category-wrapper">
               <CategoryStories/>
               <Footer/>
               {/* <div className="category-footer-wrapper">
                    <H5 className="h5-pink-swan-center">
                        © Copyright 2012 - 2020   |   
                        Avada Theme by Theme Fusion   |   
                        All Rights Reserved   |   
                        Powered by WordPress
                    </H5>
                </div> */}
            </div>
            {props.gallery.show ? <Gallery/> : null}
        </>
    );
}

export default connect(
    (state) => {
        return {
            categoryStories: Selectors.getCategoryStoriesState(state),
            gallery: Selectors.getGalleryState(state),
        };
    },
    (dispatch) => {
        return {
            initCategoryStories: bindActionCreators(Actions.initCategoryStories, dispatch),
            addGalleryImages: bindActionCreators(Actions.addGalleryImages, dispatch)
        };
    }
)(Category);
 