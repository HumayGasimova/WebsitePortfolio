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
* Utility
*/

import {
    H1,
    H4,
    EH1
} from '../../UtilityComponents';

/**
* SingleStory component definition and export
*/

export const SingleStory = (props) => {

    const [leaveACommentRef, setLeaveACommentRef] = useState(null)

    /**
    * Methods
    */

    useEffect(()=>{
        if(props.location.state){
            props.initSingleStory(props.location.state.obj);
        }
        if(props.location.state && props.location.state.comment){
            window.scrollTo(0, leaveACommentRef);
        }else{
            window.scrollTo(0, 0);
        }
    }, [props.location.state, leaveACommentRef]);

    const getLeaveACommentsDivRef = (ref) => {
        setLeaveACommentRef(ref + 500);
    }

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
                <H4 className="h4-white-centered">{`Home / ${props.singleStory.categories ? props.singleStory.categories.join(", "): []} / ${props.singleStory.header}`}</H4>
            </div>
            <div className="single-story-wrapper">
                <SingleStoryContent
                    image={props.singleStory.image}
                    header={props.singleStory.header}
                    paragraphs={props.singleStory.paragraphs ? props.singleStory.paragraphs : []}
                    id={props.singleStory.id}
                    getLeaveACommentsDivRef={(ref) => getLeaveACommentsDivRef(ref)}
                />
            </div>
            {props.gallery.show ? <Gallery/> : null}
        </>
    );
}

export default connect(
    (state) => {
        return {
            singleStory: Selectors.getSingleStoryState(state),
            gallery: Selectors.getGalleryState(state)
        };
    },
    (dispatch) => {
        return {
            initSingleStory: bindActionCreators(Actions.initSingleStory, dispatch)
        };
    }
)(SingleStory);
 