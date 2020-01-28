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

/**
* Styles
*/

import './blog.scss';

/**
* Components
*/

import BlogCard from '../../SmallParts/BlogCard/blogCard';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import {
    blogCards
} from '../../../constants/blogCards';

/**
* Blog component definition and export
*/

export const Blog = (props) => {

    /**
    * Methods
    */

    useEffect(() => {
        let updatedBlogCards = [...blogCards].slice(0, 3);
        props.initBlogCards(updatedBlogCards);
    }, [])

    const viewBlogCardOnClick = (id) => {
        props.history.push(`/blogSingleId:${id}`, {id});
    }

    const renderBlogCards = () => {
        return(
            <div className="blog-wrapper">{props.blogCardsToShow.map((el, i) => {
                return(
                    <BlogCard
                        key={i}
                        image={el.image}
                        date={el.date}
                        author={el.author}
                        numberOfComments={el.numberOfComments}
                        text={el.text}
                        onClick={() => viewBlogCardOnClick(el.id)}
                    />
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="blog">
            <div className="blog-paragraph">
                <div className="blog-text-line1">BLOG</div>
                <div className="blog-text-line2">Recent Blog</div>
                <div className="blog-text-line3"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
            </div>
            {/* <div > */}
                {renderBlogCards()}
            {/* </div> */}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            blogCardsToShow: Selectors.getBlogCardsToShowState(state),
            // dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            initBlogCards: bindActionCreators(Actions.initBlogCards, dispatch),
            // stopChangingFeedbacks: bindActionCreators(Actions.stopChangingFeedbacks, dispatch)
        };
    }
)(withRouter(Blog));
 