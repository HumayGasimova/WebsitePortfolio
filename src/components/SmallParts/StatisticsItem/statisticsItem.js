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
* Icons
*/

import { 
    faCoffee,
    faIceCream,
    faUtensils,
    faFire,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';

/**
* Styles
*/

import './statisticsItem.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

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
    EH4,
    EW1,
    Line1
} from '../../UtilityComponents';

/**
* StatisticsItem component definition and export
*/

export const StatisticsItem = (props) => {
    
    const [value, setValue] = useState(0);
    const [delay, setDelay] = useState(0.01);

    /**
    * Methods
    */

    useInterval(() => {
        setValue(value + 1);
    }, value === props.number ? null : delay)
    
    useEffect(() => {
        let timer = setTimeout(() => {
            setValue(props.number);
        }, 7000);
        return () => clearTimeout(timer);
    }, []);

    const renderIcon = (icon) => {
        switch(icon){
            case 'faCoffee':
        return faCoffee;
            case 'faIceCream':
        return faIceCream;
            case 'faUtensils':
        return faUtensils;
            case 'faFire':
        return faFire;
            default:
        return faSpinner;
        }
    }
    
    /**
    * Markup
    */

    return(
        <div className="statistics-item">
            <FontAwesomeIcon icon={renderIcon(props.icon)} size="3x" color="rgb(180, 139, 62)"/>
            <H1 className="h1-center-dekko">{value}</H1>
            <H3>{props.header}</H3>
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
)(StatisticsItem);
 