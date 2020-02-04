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


import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
 } from 'react-router-dom';

/**
* Styles
*/

import './main.scss';

/**
* Components
*/

import Toolbar from './Parts/Toolbar/toolbar';
import Sidebar from './Parts/Sidebar/sidebar';
import Description from './Parts/Description/description';
import Reservations from './Parts/Reservations/reservations';
import Advantages from './Parts/Advantages/advantages';
import Footer from './Parts/Footer/footer';

import AboutUs from './Pages/AboutUs/aboutUs';

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

import CoverLogo from '../images/9b541779-8309-4d93-b45f-ac4060084b89_200x200.png';

/**
* Main component definition and export
*/

export const Main = (props) => {

    /**
    * Methods
    */

    /**
    * Markup
    */

    return(
        <div className="main">
            <Toolbar/>
            <Sidebar/>
            {/* <div className="main-wrapper">
                <div className="main-wrapper-cover-logo">
                    <img src={`/${CoverLogo}`}/>
                </div>
                <Description/>
                <Reservations/>
                <Advantages/>
                <Footer/>
            </div> */}
            {/* <div className="main-cover-wrapper">
                <div className="main-wrapper-backgroud-div"/>
            </div>
            <div className="main-logo">
                <img src={`/${CoverLogo}`}/>
            </div>
            <div className="main-wrapper">
                <Description/>
                <Reservations/>
                <Advantages/>
                <Footer/>
            </div> */}
            <Switch>
                <Route 
                    exact 
                    path={props.match.url + "/about-us"}
                    component={AboutUs}
                />
            </Switch>
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
)(Main);
 