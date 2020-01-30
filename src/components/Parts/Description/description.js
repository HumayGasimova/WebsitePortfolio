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
    withRouter
} from 'react-router-dom';

/**
* Styles
*/

import './description.scss';

/**
* Components
*/

import Button from '../../../library/Button/button';
// import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

/**
* Constants
*/

import {
    sidebarItems
} from '../../../constants/sidebarItems';

import {
    socialMediaIcons
} from '../../../constants/socialMediaIcons';

/**
* Utility
*/

import {
    H1,
    Line
} from '../../UtilityComponents';

/**
* Description component definition and export
*/

export const Description = (props) => {

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
        <div className="description">
            <div className="description-wrapper">
                <H1>
                    <>A NEW WAY OF EATING</>
                </H1>
                <div className="description-h2"></div>
                <Line/>
                <div className="description-wrapper2">
                    <div className="description-image"></div>
                    <div className="description-image"></div>
                </div>
                <div className="description-h3"></div>
                <Button
                    // className={"customer-feedbacks-button"}
                    // onClick={props.leftArrowOnClick}
                />
            </div>
            <div className="description-image">
                
            </div>
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
)(Description);
 