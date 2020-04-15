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

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Styles
*/

import './guideItems.scss';

/**
* Utility
*/

import {
    H4,
    EH0
} from '../../../UtilityComponents';

/**
* GuideItems component definition and export
*/

export const GuideItems = (props) => {

    /**
    * Methods
    */

    const guideItemsOnClick = (path, obj) => {
        props.startInitRelatedPosts(null);
        props.history.push(`/crypto-cafe/${path}`,{obj});
    }

    const renderItems = () => {
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
    null,
    (dispatch) => {
        return {
            startInitRelatedPosts: bindActionCreators(Actions.startInitRelatedPosts, dispatch)
        };
    }
)(withRouter(GuideItems));
 