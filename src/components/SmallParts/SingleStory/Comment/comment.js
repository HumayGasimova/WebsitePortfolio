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

import './comment.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Utility
*/

import {
    H2,
    H3,
    H4,
    H5,
    H6,
    EH0,
    EH1,
    EH2,
    EH4,
    EW1,
    EW2,
    Line1
} from '../../../UtilityComponents';

/**
* Images
*/

import Image1 from '../../../../images/Portrait_Placeholder.png';
import DefaultImage from '../../../../images/error.jpg';
import * as Colors from '../../../../constants/colors';

/**
* Comment component definition and export
*/

export const Comment = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    const loadImage = (img) => {
        switch(img) {
            case 'Name1':
                return Image1;
            default:
                return DefaultImage;
        }
    }

    /**
    * Markup
    */

    return(
        <div className="comment">
            <div className="comment-image">
                <img src={loadImage(props.image)}/>
            </div>
            <EW2/>
            <div className="comment-content">
                <H4 className="h4-animation">{props.name}</H4>
                <EH0/>
                <H6 className="h6-pink-grey-yanone-suva">{props.date}</H6>
                <EH0/>
                <H5 textColor={Colors.EBB} >{props.comment}</H5>
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
)(Comment);
 