/**
* Libraries
*/

import React, {
    useEffect, useState
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

import './singleStory.scss';

/**
* Components
*/

import SingleStoryContent from '../../Parts/SingleStoryContent/singleStoryContent';
import Stories from '../../Parts/Stories/stories';
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
* SingleStory component definition and export
*/

export const SingleStory = (props) => {

    /**
    * Methods
    */

    useEffect(()=>{
        props.initSingleStory(props.location.state ? props.location.state.obj : {});
        window.scrollTo(0, 0);
    }, []);

    /**
    * Markup
    */

    return(
        <>
            <div className="single-story-cover-wrapper">
                <div className="single-story-wrapper-backgroud-div"/>
            </div>
            <div className="single-story-header-text">
                <H1 className="h1-center">{props.singleStory.header}</H1>
                <EH1/>
                <H4 className="h4-white-centered">{`Home / ${props.singleStory.tag ? props.singleStory.tag.join(", "): []} / ${props.singleStory.header}`}</H4>
            </div>
            <div className="single-story-wrapper">
                <SingleStoryContent
                    image={props.singleStory.image}
                    header={props.singleStory.header}
                    paragraphs={props.singleStory.paragraphs ? props.singleStory.paragraphs : []}
                    id={props.singleStory.id}
                />
            </div>
        </>
    );
}

export default connect(
    (state) => {
        return {
            singleStory: Selectors.getSingleStoryState(state),
            // dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            initSingleStory: bindActionCreators(Actions.initSingleStory, dispatch),
            // stopChangingFeedbacks: bindActionCreators(Actions.stopChangingFeedbacks, dispatch)
        };
    }
)(SingleStory);
 