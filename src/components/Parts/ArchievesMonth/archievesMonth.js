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

import './archievesMonth.scss';

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
* ArchievesMonth component definition and export
*/

export const ArchievesMonth = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    const storyOnClick = (path, obj) => {
        props.history.push(`/crypto-cafe/${path}`,{obj});
        props.activateMenuItem(null);
    }

    const renderStoriesByMonth = () => {
        if(props.archievesMonth.storiesArray){
            return(
                <>{props.archievesMonth.storiesArray.map((el, i) => {
                    let description = el.paragraphs[0].slice(0, 195);
                    if(i % 2) {
                        return(
                            <StoryCard
                                archievesMonth
                                key={i}
                                header={el.header}
                                description={description}
                                image={el.image}
                                iconSearch={faSearch}
                                iconLink={faLink}
                                show={props.archievesMonth.show}
                                onClick={() => storyOnClick(el.path, el)}
                                openGallery={() => props.openGallery(el.id, "Archieve")}
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
                                iconSearch={faSearch}
                                iconLink={faLink}
                                show={props.archievesMonth.show}
                                onClick={() => storyOnClick(el.path, el)}
                                openGallery={() => props.openGallery(el.id, "Archieve")}
                            />
                        )
                    }
                })}</>
            )
        }
        
       
    }

    /**
    * Markup
    */

    return(
        <div className="archieves-month">
            <div className="archieves-month-icon">
                <EH1/>
                <FontAwesomeIcon icon={faComments} size="3x" color="rgb(63, 63, 63)"/>
                <EH1/>
                <div className="archieves-by-month">
                    <div 
                        className="archieves-month-button"
                        onClick={() => props.showArchievesStoriesOfMonth(props.archievesMonth.key)}
                    >
                        <H4 className="h4-white-centered">{props.archievesMonth.path ? props.archievesMonth.path.slice(props.archievesMonth.path.indexOf('/') + 1, props.archievesMonth.path.length) : null}</H4>
                        <H4 className="h4-white-centered">{props.archievesMonth.path ? props.archievesMonth.path.slice(0, props.archievesMonth.path.indexOf('/')) : null}</H4>
                    </div>

                        <CSSTransition 
                            in={props.archievesMonth.show} 
                            timeout={950}
                            mountOnEnter
                            unmountOnExit
                            classNames={{
                                enter: '',
                                enterActive: 'archieves-month-wrapper-open',
                                exit: '',
                                exitActive: 'archieves-month-wrapper-close'
                            }}
                        > 
                            <div 
                                className="archieves-month-wrapper"
                            >
                                {renderStoriesByMonth()}
                            </div>
                        </CSSTransition>
                </div>
            </div>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            archievesMonth: Selectors.getArchievesMonthState(state),
        };
    },
    (dispatch) => {
        return {
            // startInitStories: bindActionCreators(Actions.startInitStories, dispatch),
            showArchievesStoriesOfMonth: bindActionCreators(Actions.showArchievesStoriesOfMonth, dispatch),
            activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
            openGallery: bindActionCreators(Actions.openGallery, dispatch),
        };
    }
)(withRouter(ArchievesMonth));
 