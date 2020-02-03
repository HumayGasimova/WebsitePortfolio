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
* Utility
*/

import {
    H2,
    H3,
    H4,
    H5,
    EH1,
    EH2,
    EW1,
    Line2
} from '../../UtilityComponents';

/**
* Styles
*/

import './cafeInfoCard.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import * as Colors from '../../../constants/colors';

/**
* CafeInfoCard component definition and export
*/

export const CafeInfoCard = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    const renderParagraphs = () => {
        return(
            <> 
                {props.paragraphs.map((el, i) => {
                    return(
                        <> 
                        <EH1/>
                        <H5 textColor={Colors.EBB}>{el}</H5>
                        <EH1/>
                        </>
                    )
                })}
            </>
        )
    }


    /**
    * Markup
    */

    return(
        <div className="cafe-info-card">
            <H3>{props.header}</H3>
            <H4>{props.description}</H4>
            <EH1/>
            <Line2/>
            {renderParagraphs()}
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
)(CafeInfoCard);
 