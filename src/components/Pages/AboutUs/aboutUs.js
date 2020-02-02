/**
* Libraries
*/

import React, {
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

import './aboutUs.scss';

/**
* Components
*/

import Toolbar from '../../Parts/Toolbar/toolbar';
import Sidebar from '../../Parts/Sidebar/sidebar';
import Advantages from '../../Parts/Advantages/advantages';
import Footer from '../../Parts/Footer/footer';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

// import CoverLogo from '../images/a8e6ac2a-a20a-46c2-86d7-068ed159557f_200x200.png';

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
    EW1,
    Line
} from '../../UtilityComponents';

/**
* AboutUs component definition and export
*/

export const AboutUs = (props) => {

    /**
    * Methods
    */

    /**
    * Markup
    */

    return(
        <div className="about-us">
            <Toolbar/>
            <Sidebar/>
            <div className="about-us-header-text">
                <H1>ABOUT US</H1>
                <EH1/>
                <Line/>
                <EH1/>
                <H3>WE DON'T PREACH ABOUT COFFEE WE MAKE COFFEE. WE HAVE EIGHT VENUES ACROSS THIS CELESTIAL ROCK.</H3>
            </div>
            <div className="about-us-wrapper">
                <div className="about-us-wrapper-cover-div">
                   
                </div>
                <Advantages/>
                <Footer/>
            </div>
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
)(AboutUs);
 