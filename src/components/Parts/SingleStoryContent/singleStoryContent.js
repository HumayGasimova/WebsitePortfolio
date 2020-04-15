/**
* Libraries
*/

import React from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Styles
*/

import './singleStoryContent.scss';

/**
* Components
*/

import Content from '../../SmallParts/SingleStory/Content/content';
import RelatedPostsSlider from '../../SmallParts/SingleStory/RelatedPostsSlider/relatedPostsSlider';
import Comment from '../../SmallParts/SingleStory/Comment/comment';
import LeaveAComment from '../../SmallParts/SingleStory/LeaveAComment/leaveAComment';
import PopularVsRecent from '../../SmallParts/SingleStory/PopularVsRecent/popularVsRecent';
import GuideItems from '../../SmallParts/SingleStory/GuideItems/guideItems';
import Categories from '../../SmallParts/SingleStory/Categories/categories';

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

import Cake from '../../../images/cake.jpg';

/**
* Utility
*/

import {
    H3,
    H5,
    EH0,
    EH1,
    EH2,
    Line3
} from '../../UtilityComponents';

/**
* SingleStoryContent component definition and export
*/

export const SingleStoryContent = (props) => {

    /**
    * Methods
    */

    const renderComments = () => {
        if(props.singleStory.comments){
            return(
                <>
                    <EH2/>
                    <H3>COMMENTS</H3>
                    <>{props.singleStory.comments.map((el, i) => {
                        return(
                            <div key={i}>
                                <EH1/>
                                <Comment
                                    image={el.image}
                                    name={el.fullName}
                                    date={el.date}
                                    comment={el.comment}
                                />
                                <EH0/>
                                <Line3/>
                            </div>
                        )
                    })}</>
                </>
            )
        }
        
    }

    /**
    * Markup
    */

    return(
        <div className="single-story-content">
            <div className="single-story-content-left-part">
                <Content 
                    image={props.image}
                    header={props.header}
                    paragraphs={props.paragraphs}
                />
                <RelatedPostsSlider
                    relatedPosts={props.relatedPosts ? props.relatedPosts : []}
                    id={props.id}
                    autoPlay
                />
                {renderComments()}
                <LeaveAComment
                    getLeaveACommentsDivRef={props.getLeaveACommentsDivRef}
                />
                <EH2/>
            </div>
            <div className="single-story-content-right-part">
                <PopularVsRecent/>
                <EH2/>
                <EH2/>
                <EH2/>
                <div className="single-story-content-right-part-wrapper">
                    <div className="single-story-content-right-part-wrapper-image">
                        <img src={Cake}/>
                    </div>
                    <EH1/>
                    <div className="single-story-content-right-part-wrapper-text">
                        <H5 className="h5-pink-swan">We use only the finest ingredients to produce stellar tastes.</H5>
                    </div>
                </div>
                <EH2/>
                <EH2/>
                <EH2/>
                <GuideItems
                    header="ARCHIVES"
                    array={props.archievesMonths}
                />
                <EH2/>
                <EH2/>
                <EH2/>
                <Categories/>
                <EH2/>
                <EH2/>
                <EH2/>
                <GuideItems
                    header="RECENT POSTS"
                    array={props.recentPosts}
                />
            </div>
            <H5 className="h5-pink-swan-center">
                © Copyright 2012 - 2020   |   
                Avada Theme by Theme Fusion   |   
                All Rights Reserved   |   
                Powered by WordPress
            </H5>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            relatedPosts: Selectors.getRelatedPostsState(state),
            singleStory: Selectors.getSingleStoryState(state),
            archievesMonths: Selectors.getArchievesMonthsState(state),
            recentPosts: Selectors.getRecentPostsState(state)
        };
    },
    (dispatch) => {
        return {
            startInitRelatedPosts: bindActionCreators(Actions.startInitRelatedPosts, dispatch)
        };
    }
)(SingleStoryContent);
 