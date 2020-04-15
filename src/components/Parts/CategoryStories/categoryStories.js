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

import './categoryStories.scss';

/**
* Components
*/

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
    H4,
    EH1
} from '../../UtilityComponents';

/**
* CategoryStories component definition and export
*/

export const CategoryStories = (props) => {

    /**
    * Methods
    */

    const storyOnClick = (path, obj) => {
        props.history.push(`/crypto-cafe/${path}`,{obj});
        props.activateMenuItem(null);
    }

    const renderStoriesByMonth = () => {
        if(props.categoryStories.storiesArrayOfCategories){
            return(
                <>{props.categoryStories.storiesArrayOfCategories.map((el, i) => {
                    let show = el.show;
                    return(
                        <div key={i} className="category-stories-by-month">
                            <div 
                                className="category-stories-button"
                                onClick={() => props.showCategoryStoriesOfMonth(el.key)}
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
                                    enterActive: 'category-stories-wrapper-open',
                                    exit: '',
                                    exitActive: 'category-stories-wrapper-close'
                                }}
                            > 
                                <div 
                                    className="category-stories-wrapper"
                                >
                                    {el.storiesArray.map((el, i) => {
                                        let description = el.paragraphs[0].slice(0, 195);
                                        
                                        if(i % 2) {
                                            return(
                                                <StoryCard
                                                    archievesMonth
                                                    key={i}
                                                    header={el.header}
                                                    description={description}
                                                    image={el.image}
                                                    iconComments={faComments}
                                                    iconSearch={faSearch}
                                                    iconLink={faLink}
                                                    show={show}
                                                    onClick={() => storyOnClick(el.path, el)}
                                                    openGallery={() => props.openGallery(el.id, 'Category')}
                                                />
                                            )
                                        }else{
                                            return(
                                                <StoryCard
                                                    archievesMonth
                                                    key={i}
                                                    left
                                                    header={el.header}
                                                    description={description}
                                                    image={el.image}
                                                    iconComments={faComments}
                                                    iconSearch={faSearch}
                                                    iconLink={faLink}
                                                    show={show}
                                                    onClick={() => storyOnClick(el.path, el)}
                                                    openGallery={() => props.openGallery(el.id, "Category")}
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
    }

    /**
    * Markup
    */

    return(
        <div className="category-stories">
            <div className="category-stories-icon">
                <EH1/>
                <FontAwesomeIcon icon={faComments} size="3x" color="rgb(63, 63, 63)"/>
                <EH1/>
                {renderStoriesByMonth()}
                <EH1/>
                <EH1/>
            </div>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            categoryStories: Selectors.getCategoryStoriesState(state)
        };
    },
    (dispatch) => {
        return {
            showCategoryStoriesOfMonth: bindActionCreators(Actions.showCategoryStoriesOfMonth, dispatch),
            activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
            openGallery: bindActionCreators(Actions.openGallery, dispatch)
        };
    }
)(withRouter(CategoryStories));
 