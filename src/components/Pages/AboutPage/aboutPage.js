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
* Components
*/

import Toolbar from '../../Parts/Toolbar/toolbar';
import MovingBubbles from '../../Parts/MovingBubbles/movingBubbles';
import CustomerFeedbacks from '../../Parts/CustomerFeedbacks/customerFeedbacks';
import Footer from '../../Parts/Footer/footer';
import Team from '../../Parts/Team/team';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Styles
*/

import './aboutPage.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* AboutPage component definition and export
*/

export const AboutPage = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    /**
    * Markup
    */

    return(
        <div className="about-page">
            <Toolbar/>
            <MovingBubbles 
                mainHeader={"About Us"}
            />
            <div className="about-page-section">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua.
            </div>
            <Team/>
            <CustomerFeedbacks/>
            <Footer/>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            // menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
        };
    },
    (dispatch) => {
        return {
            // toggleMenuButton: bindActionCreators(Actions.toggleMenuButton, dispatch),
        };
    }
)(AboutPage);
 