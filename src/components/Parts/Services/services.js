/**
* Libraries
*/

import React, {
    useEffect,
    useState
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

import './services.scss';

/**
* Components
*/

import Service from '../../SmallParts/Service/service';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import {
    serviceCards
} from '../../../constants/serviceCards';

/**
* Services component definition and export
*/

export const Services = (props) => {

    /**
    * Methods
    */

    const renderServices = () => {
        return(
            <div className="services-cards">{
                serviceCards.map((el,i)=>{
                return(
                    <Service
                        key={i}
                        icon={el.icon}
                        header={el.header}
                        text={el.text}
                        hexagonStyle={el.hexagonStyle}
                    />
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="services">
            <div className="services-paragraph">
                <div className="services-text-line1">OUR SERVICES</div>
                <div className="services-text-line2">Web design, bring your ideas to life</div>
                <div className="services-text-line3"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. 
                </div>
            </div>
            {renderServices()}
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
)(Services);
 