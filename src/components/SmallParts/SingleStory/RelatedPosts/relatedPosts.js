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

import RelatedPostCard from '../RelatedPostCard/relatedPostCard';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Styles
*/

import './relatedPosts.scss';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

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
} from '../../../UtilityComponents';

/**
* RelatedPosts component definition and export
*/

export const RelatedPosts = (props) => {

    /**
    * State
    */

    useEffect(() => {
        props.startInitRelatedPosts(props.id);
    }, [props.id])

    /**
    * Methods
    */

    const renderRelatedPostsCards = () => {
     
        return(
            <div>{props.relatedPosts.map((el, i) => {
                return (
                    <RelatedPostCard
                        key={i}
                        image={el.image}
                    />
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="related-posts">
            <EH2/>
            <H3>RELATED POSTS</H3>
            <EH2/>
            <div>
                <div></div>
                {renderRelatedPostsCards()}
                <div></div>
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
)(RelatedPosts);
 