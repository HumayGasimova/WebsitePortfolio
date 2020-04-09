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
* Components
*/

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Styles
*/

import './guideItems.scss';

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
* GuideItems component definition and export
*/

export const GuideItems = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    const guideItemsOnClick = (path, obj) => {
        props.startInitRelatedPosts(null);
        props.history.push(`/crypto-cafe/${path}`,{obj});
    }

    const renderItems = () => {
        // if(props.array){
            return(
                <div className="guide-items-items">{props.array.map((el, i) => {
                    return(
                       <div 
                            key={i} 
                            className="guide-items-item" 
                            onClick={() => guideItemsOnClick(el.path, el)}
                        >
                            <EH0/>
                            <H4 className="h4-animation-with-icon-left">{el.header}</H4>
                            <EH0/>
                       </div>
                    )
                })}</div>
            )
        // }
    }

    /**
    * Markup
    */

    return(
        <div className="guide-items">
            <H4 className={"h4-white"}>{props.header}</H4>
            {renderItems()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // archievesMonths: Selectors.getArchievesMonthsState(state),
        };
    },
    (dispatch) => {
        return {
            startInitRelatedPosts: bindActionCreators(Actions.startInitRelatedPosts, dispatch),
            activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
        };
    }
)(withRouter(GuideItems));
 