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
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Components
*/

import RelatedPostCard from '../RelatedPostCard/relatedPostCard';
import Slider from '../Slider/slider';

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
* Icons
*/

import { 
    faArrowAltCircleLeft,
    faArrowAltCircleRight
} from '@fortawesome/free-solid-svg-icons';

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

    const myRef = React.createRef()

    /**
    * Methods
    */

    useEffect(() => {
        props.startInitRelatedPosts(props.id);
        // props.addRelatedPostsElement();
      
    }, [props.id, props.relatedPosts.length]);

    const renderRelatedPostsCards = () => {
        
        return(
            <div className="related-post-cards">{props.relatedPosts.map((el, i) => {
                return (
                        <RelatedPostCard
                            key={i}
                            image={el.image}
                            header={el.header}
                            day={el.day}
                            month={el.month}
                            year={el.year}
                            comments={el.comments}
                        />
                )
            })}</div>          
        )
    }

    /**
    * Markup
    */

    // return(
    //     <div className="related-posts">
    //         <EH2/>
    //         <H3>RELATED POSTS</H3>
    //         <EH2/>
    //         <Slider
    //             slidesArray={props.relatedPosts}
    //         />
    //     </div>
    // );

    return(
        <div className="related-posts">
            <EH2/>
            <H3>RELATED POSTS</H3>
            <EH2/>
            <div className="related-posts-wrapper" id="slider">
                <div className="related-posts-arrow-left" id="prev">
                    <FontAwesomeIcon 
                        icon={faArrowAltCircleLeft} 
                        size="lg" 
                        color="white"
                    />
                </div>
                <div className="related-posts-inner-wrapper">
                   
                    {renderRelatedPostsCards()}
                    
                </div>
                <div className="related-posts-arrow-right" id="next">
                    <FontAwesomeIcon 
                        icon={faArrowAltCircleRight} 
                        size="lg" 
                        color="white"
                    />
                </div>
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
            addRelatedPostsElement: bindActionCreators(Actions.addRelatedPostsElement, dispatch),
        };
    }
)(RelatedPosts);
 