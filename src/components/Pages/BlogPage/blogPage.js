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

import Toolbar from '../../Parts/Toolbar/toolbar';
import MovingBubbles from '../../Parts/MovingBubbles/movingBubbles';
import BlogCard from '../../SmallParts/BlogCard/blogCard';
import Pagination from '../../SmallParts/Pagination/pagination';
import Footer from '../../Parts/Footer/footer';

/**
* Styles
*/

import './blogPage.scss';

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
* BlogPage component definition and export
*/

export const BlogPage = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    useEffect(() => {
        let updatedBlogCards = [...blogCards].slice(0, 6);
        props.initBlogCards(updatedBlogCards);
    }, []);

    const viewBlogCardOnClick = (id) => {
        props.history.push(`/blogSingleId:${id}`, {id});
    }

    const renderBlogCards = () => {
        return(
            <div className="blog-page-cards">{props.blogCardsToShow.map((el, i) => {
                return(
                    <div key={i} className="blog-page-card">
                        <BlogCard
                            image={el.image}
                            date={el.date}
                            author={el.author}
                            numberOfComments={el.numberOfComments}
                            text={el.text}
                            onClick={() => viewBlogCardOnClick(el.id)}
                        />
                    </div>
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="blog-page">
            <Toolbar/>
            <MovingBubbles 
                mainHeader={"Blog"}
            />
            <div className="blog-page-wrapper">
                {renderBlogCards()}
                <Pagination 
                    page="blogPage"
                />
            </div>
            <Footer/>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            blogCardsToShow: Selectors.getBlogCardsToShowState(state),
        };
    },
    (dispatch) => {
        return {
            initBlogCards: bindActionCreators(Actions.initBlogCards, dispatch),
        };
    }
)(BlogPage);
 