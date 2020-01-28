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

import './footerItem.scss';

/**
* Icons
*/

import { 
    faCaretRight  
} from '@fortawesome/free-solid-svg-icons'

/**
* Components
*/

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';


/**
* FooterItem component definition and export
*/

export const FooterItem = (props) => {

    /**
    * Methods
    */

    const viewBlogCardOnClick = (path) => {
        props.history.push(`/${path}`);
    }

    const renderLinks = () => {
        return(
            <div className="footer-item-links">{props.links.map((el, i) => {
                return(
                    <div key={i} className="footer-item-links-link">
                        <FontAwesomeIcon icon={faCaretRight} size="lg" className="icon-arrow"/>
                        <a 
                            href={`/${el.path}`}
                        >
                            {el.link}
                        </a>
                    </div>
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="footer-item">
            <div className="footer-item-header">{props.header}</div>
            {renderLinks()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // feedback: Selectors.getFeedbackState(state),
        };
    },
    (dispatch) => {
        return {
            // startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
        };
    }
)(FooterItem);
 