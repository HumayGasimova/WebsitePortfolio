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

import './home.scss';

/**
* Components
*/

import Description from '../../Parts/Description/description';
import Reservations from '../../Parts/Reservations/reservations';
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

import CoverLogo from '../../../images/9b541779-8309-4d93-b45f-ac4060084b89_200x200.png';

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
* Home component definition and export
*/

export const Home = (props) => {

    /**
    * Methods
    */

    /**
    * Markup
    */

    return(
        <>
            <div className="home-cover-wrapper">
                <div className="home-wrapper-backgroud-div"/>
            </div>
            <div className="home-logo">
                <img src={CoverLogo}/>
            </div>
            <div className="home-wrapper">
                <Description/>
                <Reservations/>
                <Advantages/>
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
)(Home);
 