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

// import * as Actions from '../../../actions';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

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
        console.log(props.location.state.obj)
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
                <H1 className="h1-center">{props.location.state.obj.header}</H1>
                <EH1/>
                <H4 className="h4-white-centered">{`Home / ${props.location.state.obj.tag.join(", ")} / ${props.location.state.obj.header}`}</H4>
            </div>
            <div className="single-story-wrapper">
                <SingleStoryContent
                    image={props.location.state.obj.image}
                    header={props.location.state.obj.header}
                    paragraphs={props.location.state.obj.paragraphs}
                    header={props.location.state.obj.header}
                />
            </div>
        </>
    );
}

export default connect(
    (state) => {
        return {
            // feedback: Selectors.getFeedbackState(state),
            // dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            // startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
            // stopChangingFeedbacks: bindActionCreators(Actions.stopChangingFeedbacks, dispatch)
        };
    }
)(SingleStory);
 