/**
* Libraries
*/

import React from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Icons
*/

import { 
    faStar
} from '@fortawesome/free-regular-svg-icons';

/**
* Utility
*/

import {
    H3,
    H4,
    H5,
    EH1,
    EW1,
    Line2
} from '../../UtilityComponents';

/**
* Styles
*/

import './cafeInfoCard.scss';

/**
* Constants
*/

import * as Colors from '../../../constants/colors';

/**
* CafeInfoCard component definition and export
*/

export const CafeInfoCard = (props) => {

    /**
    * Methods
    */

    const renderParagraphs = () => {
        return(
            <> 
                {props.paragraphs.map((el, i) => {
                    return(
                        <div key={i}> 
                            <EH1/>
                            <H5 textColor={Colors.EBB}>{el}</H5>
                            <EH1/>
                        </div>
                    )
                })}
            </>
        )
    }

    const renderOptions = () => {
        return(
            <> 
                {props.options.map((el, i) => {
                    return(
                        <div key={i}>
                            <EH1/>
                            <div className="cafe-info-card-option">
                                <FontAwesomeIcon icon={faStar} size="sm" color="rgb(180, 139, 62)" className="icon-arrow-left"/>
                                <EW1/>
                                <H5 textColor={Colors.EBB}>{el}</H5>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

 
    /**
    * Markup
    */

    return(
        <div className={props.className}>
            <H3>{props.header}</H3>
            <EH1/>
            <H4>{props.description}</H4>
            <EH1/>
            <Line2/>
            {renderParagraphs()}
            {props.options ? 
               renderOptions()
            : null}
        </div>
    );
}

export default CafeInfoCard;
 