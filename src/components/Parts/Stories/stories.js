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
* Icons
*/

import { 
    faComments
} from '@fortawesome/free-regular-svg-icons';

/**
* Styles
*/

import './stories.scss';

/**
* Components
*/

import Button from '../../../library/Button/button';
import StoryCard from '../../SmallParts/StoryCard/storyCard';

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
    H2,
    H3,
    H4,
    H5,
    EH1,
    EH2,
    EH4,
    EW1,
    Line1,
    DoubleLine1
} from '../../UtilityComponents';

/**
* Stories component definition and export
*/

export const Stories = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    useEffect(() => {
        if(props.stories.length === 0){
            props.startInitStories(0);
        }
    }, [])

    const loadMoreHandler = () => {
        props.startInitStories(props.stories.length);
    } 

    const renderStoriesByMonth = () => {
        return(
            <>{props.stories.map((el, i) => {
                return(
                    <div key={i} className="stories-by-month">
                        <div className="stories-button">
                            <H4 className="h4-white-centered">{el.date.month}</H4>
                            <H4 className="h4-white-centered">{el.date.year}</H4>
                        </div>
                        <div className="stories-wrapper">
                            {el.storiesArray.map((el, i) => {
                                let description = el.paragraphs[0].slice(0, 195);
                                if(i % 2) {
                                    return(
                                        <StoryCard
                                            key={i}
                                            header={el.header}
                                            description={description}
                                            image={el.image}
                                        />
                                    )
                                }else{
                                    return(
                                        <StoryCard
                                            key={i}
                                            left
                                            header={el.header}
                                            description={description}
                                            image={el.image}
                                        />
                                    )
                                }
                               
                            })}
                        </div>
                    </div>
                )
            })}</>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="stories">
            <div className="stories-icon">
                <EH1/>
                <FontAwesomeIcon icon={faComments} size="3x" color="rgb(63, 63, 63)"/>
                <EH1/>
                {renderStoriesByMonth()}
                <EH1/>
                <EH1/>
                <Button
                    outerDivClassName="load-more-posts-button-wrapper"
                    className="load-more-posts"
                    text="LOAD MORE POSTS"
                    onClick={loadMoreHandler}
                />
            </div>
            
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            stories: Selectors.getStoriesState(state),
        };
    },
    (dispatch) => {
        return {
            startInitStories: bindActionCreators(Actions.startInitStories, dispatch),
        };
    }
)(Stories);
 