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

import './singleStoryContent.scss';

/**
* Components
*/

import Content from '../../SmallParts/SingleStory/Content/content';
import RelatedPosts from '../../SmallParts/SingleStory/RelatedPosts/relatedPosts';
import Comment from '../../SmallParts/SingleStory/Comment/comment';
import LeaveAComment from '../../SmallParts/SingleStory/LeaveAComment/leaveAComment';
// import * as Selectors from '../../../reducers/selectors';

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

/**
* Utility
*/

import {
    H2,
    H3,
    H4,
    H5,
    H6,
    EH0,
    EH1,
    EH2,
    EH4,
    EW1,
    EW2,
    Line1,
    Line3
} from '../../UtilityComponents';

/**
* Constants
*/

import {
    statisticsArray
} from '../../../constants/statisticsArray';


/**
* SingleStoryContent component definition and export
*/

export const SingleStoryContent = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    useEffect(() => {
        // props.startInitRelatedPosts(props.id);
    }, [props.id]);

    const renderComments = () => {
        if(props.singleStory.comments){
            return(<>
                    <EH2/>
                    <H3>COMMENTS</H3>
                    <div className="single-story-content-comments">{props.singleStory.comments.map((el, i) => {
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
                    })}</div>
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
                {/* <RelatedPosts
                    // relatedPosts={props.relatedPosts ? props.relatedPosts : []}
                    id={props.id}
                /> */}
                {renderComments()}
                <LeaveAComment/>
                <EH2/>
            </div>
            <div className="single-story-content-right-part">
            
            </div>
            <H5 className="h5-pink-swan-jaldi">
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
        };
    },
    (dispatch) => {
        return {
            startInitRelatedPosts: bindActionCreators(Actions.startInitRelatedPosts, dispatch),
        };
    }
)(SingleStoryContent);
 