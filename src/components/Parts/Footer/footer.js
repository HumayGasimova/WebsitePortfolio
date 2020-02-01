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

/**
* Styles
*/

import './footer.scss';

/**
* Components
*/

import FooterItem from '../../SmallParts/FooterItem/footerItem';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

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
    EW1,
    EW3,
    EH4,
    Line
} from '../../UtilityComponents';

/**
* Images
*/

import MyLogo from '../../../images/finalLogoLight.png';
import MyLogoText from '../../../images/crypto.png';

/**
* Constants
*/

import {
    footerItems
} from '../../../constants/footerItems';

/**
* Footer component definition and export
*/

export const Footer = (props) => {

    /**
    * Methods
    */

    const renderFooterItems = () => {
        return(
        <div className="footer-items">
            {footerItems.map((el, i) => {
                return(
                    <FooterItem
                        key={i}
                        icon={el.icon}
                        name={el.name}
                        info={el.info}
                    />
                )
            })}
        </div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-image-logo">
                    <img src={MyLogo}/>
                </div>
                <div className="footer-text-logo">
                    <img src={MyLogoText}/>
                </div>
            </div>
            {renderFooterItems()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // feedback: Selectors.getFeedbackState(state),
            // dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            // startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
            // stopChangingFeedbacks: bindActionCreators(Actions.stopChangingFeedbacks, dispatch)
        };
    }
)(Footer);
 