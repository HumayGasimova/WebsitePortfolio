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
    EH1,
    EH2,
    EH4,
    EW1,
    EW2,
    Line1
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
                    // header={props.header}
                />
                {/* <RelatedPosts
                    // relatedPosts={props.relatedPosts ? props.relatedPosts : []}
                    id={props.id}
                /> */}
                <LeaveAComment/>
            </div>
            <div className="single-story-content-right-part">
            
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            relatedPosts: Selectors.getRelatedPostsState(state),
        };
    },
    (dispatch) => {
        return {
            startInitRelatedPosts: bindActionCreators(Actions.startInitRelatedPosts, dispatch),
        };
    }
)(SingleStoryContent);
 