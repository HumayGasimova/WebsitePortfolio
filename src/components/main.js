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

import './main.scss';

/**
* Components
*/

import Toolbar from './Parts/Toolbar/toolbar';
import MovingBubbles from './Parts/MovingBubbles/movingBubbles';
import OtherProjects from './Parts/OtherProjects/otherProjects';
import Services from './Parts/Services/services';
import Newsletter from './Parts/Newslatter/newsletter';
import Portfolio from './Parts/Portfolio/portfolio';
import CustomerFeedbacks from './Parts/CustomerFeedbacks/customerFeedbacks';
import Achievements from './Parts/Achievements/achievements';
import Blog from './Parts/Blog/blog';
import Footer from './Parts/Footer/footer';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

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
            <Toolbar className={"-main"}/>
            <MovingBubbles 
                mainHeader={"Welcome"}
            />
            <OtherProjects/>
            <Services/>
            <Newsletter/>
            <Portfolio className="portfolio"/>
            <CustomerFeedbacks/>
            <Achievements/>
            <Blog/>
            <Footer/>
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
 