/**
* Libraries
*/

import React, {
    useEffect,
    useState
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
* Styles
*/

import './achievement.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Components
*/

/**
* Icons
*/

import { 
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

/**
* Constants
*/

import {
    feedbacksArray
} from '../../../constants/feedbacks';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Hooks
*/

import {
    useInterval
} from '../../../Hooks/useInterval';

/**
* Achievement component definition and export
*/

export const Achievement = (props) => {
    
    const [value, setValue] = useState(0);
    const [delay, setDelay] = useState(0.01);

    /**
    * Methods
    */

    useInterval(() => {
        setValue(value + 1);
    }, value === props.achievementValue ? null : delay)
    
    useEffect(() => {
        let timer = setTimeout(() => {
            setValue(props.achievementValue);
        }, 7000);
        return () => clearTimeout(timer);
    }, [])
    
    /**
    * Markup
    */

    return(
        <div className="achievement">
            <div className="achievement-value">{value}</div>
            <div className="achievement-text">{props.achievementText}</div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // feedbacksToShow: Selectors.getFeedbacksToShowState(state),
        };
    },
    (dispatch) => {
        return {
            // initFeedbacks: bindActionCreators(Actions.initFeedbacks, dispatch),
        };
    }
)(Achievement);
 