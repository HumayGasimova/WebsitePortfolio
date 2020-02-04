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
import Home from './Pages/Home/home';
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
                    <img src={CoverLogo}/>
                </div>
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
                <Route 
                    exact 
                    path={props.match.url + ""}
                    component={Home}
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
 