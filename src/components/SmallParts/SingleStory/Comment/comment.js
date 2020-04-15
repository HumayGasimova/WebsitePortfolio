/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './comment.scss';

/**
* Utility
*/

import {
    H4,
    H5,
    H6,
    EH0,
    EW2
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

export default Comment;
 