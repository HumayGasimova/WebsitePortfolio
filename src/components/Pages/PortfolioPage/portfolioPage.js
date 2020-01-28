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
import Portfolio from '../../Parts/Portfolio/portfolio';
import Footer from '../../Parts/Footer/footer';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Styles
*/

import './portfolioPage.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* PortfolioPage component definition and export
*/

export const PortfolioPage = (props) => {

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
        <div className="portfolio-page">
            <Toolbar/>
            <MovingBubbles 
                mainHeader={"Portfolio"}
            />
            <Portfolio className="portfolio-page-all" portfolioPage/>
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
)(PortfolioPage);
 