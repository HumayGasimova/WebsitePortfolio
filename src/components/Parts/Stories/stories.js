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

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Icons
*/

import { 
    faComments
} from '@fortawesome/free-regular-svg-icons';

import { 
    faSearch,
    faLink
} from '@fortawesome/free-solid-svg-icons';

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

    const storyOnClick = (path, obj) => {
        props.history.push(`/crypto-cafe/${path}`,{obj});
        props.activateMenuItem(null);
    }

    const renderStoriesByMonth = () => {
        return(
            <>{props.stories.map((el, i) => {
                let show = el.show;
                return(
                    <div key={i} className="stories-by-month">
                        <div 
                            className="stories-button"
                            onClick={() => props.showStoriesOfMonth(el.key)}
                        >
                            <H4 className="h4-white-centered">{el.date.month}</H4>
                            <H4 className="h4-white-centered">{el.date.year}</H4>
                        </div>

                        <CSSTransition 
                            in={el.show} 
                            timeout={950}
                            mountOnEnter
                            unmountOnExit
                            classNames={{
                                enter: '',
                                enterActive: 'stories-wrapper-open',
                                exit: '',
                                exitActive: 'stories-wrapper-close'
                            }}
                        > 
                            <div 
                                className="stories-wrapper"
                            >
                                {el.storiesArray.map((el, i) => {
                                    let description = el.paragraphs[0].slice(0, 195);
                                    
                                    if(i % 2) {
                                        return(
                                            <StoryCard
                                                key={i}
                                                header={el.header}
                                                description={description}
                                                image={el.image}
                                                iconComments={faComments}
                                                iconSearch={faSearch}
                                                iconLink={faLink}
                                                show={show}
                                                path={el.path}
                                                obj={el}
                                                onClick={() => storyOnClick(el.path, el)}
                                                openGallery={() => props.openGallery(el.id)}
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
                                                iconComments={faComments}
                                                iconSearch={faSearch}
                                                iconLink={faLink}
                                                show={show}
                                                path={el.path}
                                                obj={el}
                                                onClick={() => storyOnClick(el.path, el)}
                                                openGallery={() => props.openGallery(el.id)}
                                            />
                                        )
                                    }
                                })}
                            </div>
                        </CSSTransition>
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
                <div className="utility-div"/>
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
            showStoriesOfMonth: bindActionCreators(Actions.showStoriesOfMonth, dispatch),
            activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
            openGallery: bindActionCreators(Actions.openGallery, dispatch),
        };
    }
)(withRouter(Stories));
 