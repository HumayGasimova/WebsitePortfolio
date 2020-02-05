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

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Styles
*/

import './storyCard.scss';

/**
* Utility
*/

import {
    H2,
    H3,
    H4,
    H5,
    EH1,
    EH2,
    EH4,
    EW1,
    Line1,
    DoubleLine1
} from '../../UtilityComponents';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Cnstants
*/

import * as Colors from '../../../constants/colors';

/**
* StoryCard component definition and export
*/

export const StoryCard = (props) => {

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
        <div className={props.left ? "story-card-left" : "story-card-right"}>
            <div className="">
                {/* <img src={}/> */}
            </div>
            <H3>{props.header}</H3>
            <DoubleLine1/>
            <H5 textColor={Colors.EBB}>{props.description} [...]</H5>
            <H3></H3>
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
)(StoryCard);
