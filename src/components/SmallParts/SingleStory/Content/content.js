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

import './content.scss';

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

import StoryImage1 from '../../../../images/photo-1527358043728-909898958b29.jpg';
import StoryImage2 from '../../../../images/rocking-chairs-white-chairs-rockers.jpg';
import StoryImage3 from '../../../../images/coffee-latte-art-coffee-shop.jpg';
import StoryImage4 from '../../../../images/coffee-cup-latte-cappuccino.jpg';
import StoryImage5 from '../../../../images/coffee-cup-beverage-food-photo.jpg';
import StoryImage6 from '../../../../images/white-bowl-beside-glass-cup.jpg';
import DefaultImage from '../../../../images/error.jpg';
import * as Colors from '../../../../constants/colors';

/**
* Content component definition and export
*/

export const Content = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    const loadImage = (img) => {
        switch(img) {
            case 'image1':
                return StoryImage1;
            case 'image2':
                return StoryImage2;
            case 'image3':
                return StoryImage3;
            case 'image4':
                return StoryImage4;
            case 'image5':
                return StoryImage5;
            case 'image6':
                return StoryImage6;
            default:
                return DefaultImage;
        }
    }

    const renderParagraphs = () => {
        return(
            <>{props.paragraphs.map((el, i) => {
                if(i === 0){
                    return(
                        <div key={i}>
                            <EH1/>
                            <H5 colorText={Colors.EBB}>{el}</H5>
                            <EH1/>
                            <div className="content-additional-text">
                                <H5 className="h5-pink-swan">Cras feugiat, nisi non auctor eleifend, elit lorem laoreet erat, facilisis suscipit neque sadips ipsum sem eu ex.</H5>
                            </div>
                        </div>
                    )
                }else{
                    return(
                        <div key={i}>
                            <EH1/>
                            <H5 colorText={Colors.EBB}>{el}</H5>
                       
                        </div>
                    )
                }
               
            })}</>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="content">
            <div className="content-image">
                <img src={loadImage(props.image)}/>
            </div>
            <EH2/>
            <H3>{props.header}</H3>
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
)(Content);
 