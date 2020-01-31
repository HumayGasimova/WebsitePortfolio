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
import Sidebar from './Parts/Sidebar/sidebar';
import Description from './Parts/Description/description';

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

import CoverLogo from '../images/a8e6ac2a-a20a-46c2-86d7-068ed159557f_200x200.png';

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
            <div className="main-wrapper">
                <div className="main-wrapper-cover-logo">
                    {/* <img src={CoverLogo}/> */}
                </div>
                <Description/>
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
)(Main);
 