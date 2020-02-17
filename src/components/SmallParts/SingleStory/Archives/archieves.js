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

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Components
*/

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Styles
*/

import './archieves.scss';

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
    H6,
    EH0,
    EH1,
    EH2,
    EH4,
    EW1,
    EW2,
    Line1,
    Line3
} from '../../../UtilityComponents';

/**
* Images
*/


/**
* Archieves component definition and export
*/

export const Archieves = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    useEffect(() => {
        if(props.archievesMonths.length === 0){
            props.startInitArchieves();
        }
    }, []);

    const renderArchieves = () => {
        if(props.archievesMonths){
            return(
                <div className="archieves-items">{props.archievesMonths.map((el, i) => {
                    return(
                       <div key={i} className="archieves-item">
                            <EH0/>
                            <H4 className="h4-animation-with-icon-left">{el.text}</H4>
                            <EH0/>
                       </div>
                    )
                })}</div>
            )
        }
    }

    /**
    * Markup
    */

    return(
        <div className="archieves">
            <H4 className={"h4-white"}>ARCHIVES</H4>
            {renderArchieves()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            archievesMonths: Selectors.getArchievesMonthsState(state),
        };
    },
    (dispatch) => {
        return {
            startInitArchieves: bindActionCreators(Actions.startInitArchieves, dispatch),
        };
    }
)(Archieves);
 