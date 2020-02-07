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

import './ourStory.scss';

/**
* Components
*/

import Statistics from '../../Parts/Statistics/statistics'
import Stories from '../../Parts/Stories/stories';
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

import Background from '../../../images/700_FO36064926_7b9fb5c531d9ef758ada11137a039fa4.jpg';

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
    Line1,
    Line2
} from '../../UtilityComponents';

/**
* OurStory component definition and export
*/

export const OurStory = (props) => {

    /**
    * Methods
    */

    /**
    * Markup
    */

    return(
        <>
            <div className="our-story-cover-wrapper">
                <div className="our-story-wrapper-backgroud-div"/>
            </div>
            <div className="our-story-header-text">
                <H1 className="h1-center">OUR STORY</H1>
                <EH1/>
                <Line2/>
                <EH1/>
                <H3 className="h3-center">BORN FROM OUR LOVE OF GOOD COFFEE, COLD BEER AND FINE FOOD. IT'S BEEN QUITE A JOURNEY.</H3>
            </div>
            <div className="our-story-wrapper">
                <Stories/>
                <Statistics/>
                <Footer/>
            </div>
        </>
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
)(OurStory);
 