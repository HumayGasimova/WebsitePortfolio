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
        props.initCategoryStories(props.location.state ? props.location.state.obj : {});
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
               <div className="category-footer-wrapper">
                    <H5 className="h5-pink-swan-center">
                        © Copyright 2012 - 2020   |   
                        Avada Theme by Theme Fusion   |   
                        All Rights Reserved   |   
                        Powered by WordPress
                    </H5>
                </div>
            </div>
        </>
    );
}

export default connect(
    (state) => {
        return {
            categoryStories: Selectors.getCategoryStoriesState(state),
            // dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            initCategoryStories: bindActionCreators(Actions.initCategoryStories, dispatch),
            // stopChangingFeedbacks: bindActionCreators(Actions.stopChangingFeedbacks, dispatch)
        };
    }
)(Category);
 