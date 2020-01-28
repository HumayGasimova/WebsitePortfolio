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
import Services from '../../Parts/Services/services';
import Footer from '../../Parts/Footer/footer';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Styles
*/

import './servicesPage.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* ServicesPage component definition and export
*/

export const ServicesPage = (props) => {

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
        <div className="services-page">
            <Toolbar/>
            <MovingBubbles 
                mainHeader={"Services"}
            />
            <Services/>
                <div className="services-page-wrapper">
                    <div className="services-page-column">
                        <div className="services-page-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium 
                            tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros 
                            bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. 
                            Duis ac tellus et risus vulputate vehicula. 
                        </div>
                        <div className="services-page-number">#1</div>
                        <div className="services-page-description">
                            <div className="services-page-description-item">UI/UX Design</div>
                            <div className="services-page-description-item">Mobile App Design Design</div>
                            <div className="services-page-description-item">Responsive Design</div>
                        </div>
                    </div>
                    <div className="services-page-column">
                        <div className="services-page-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium 
                            tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros 
                            bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. 
                            Duis ac tellus et risus vulputate vehicula. 
                        </div>
                        <div className="services-page-number">#2</div>
                        <div className="services-page-description">
                            <div className="services-page-description-item">HTML / CSS</div>
                            <div className="services-page-description-item">Prototyping</div>
                            <div className="services-page-description-item">Wireframes</div>
                        </div>
                    </div>
                    <div className="services-page-column">
                        <div className="services-page-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium 
                            tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros 
                            bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. 
                            Duis ac tellus et risus vulputate vehicula. 
                        </div>
                        <div className="services-page-number">#3</div>
                        <div className="services-page-description">
                            <div className="services-page-description-item">Product Strategy</div>
                            <div className="services-page-description-item">UX Strategy</div>
                            <div className="services-page-description-item">User Testing</div>
                        </div>
                    </div>
                </div>
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
)(ServicesPage);
 