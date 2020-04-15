/**
* Libraries
*/

import React from 'react';

import {
    connect
} from 'react-redux';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Icons
*/

import { 
    faComments,
    faThumbtack,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';

import { 
    faEnvelope
} from '@fortawesome/free-regular-svg-icons';

/**
* Utility
*/

import {
    H4,
    H5,
    EH1,
    EW3,
    EH3
} from '../../UtilityComponents';

/**
* Styles
*/

import './footerItem.scss';

/**
* FooterItem component definition and export
*/

export const FooterItem = (props) => {

    /**
    * Methods
    */

    const renderIcon = (iconName) => {
        switch(iconName) {
            case 'faEnvelope':
                return faEnvelope;
            case 'faComments':
                return faComments;
            case 'faThumbtack':
                return faThumbtack;
            default:
                return faSpinner;
        }
    }

    /**
    * Markup
    */

    return(
            <>
                <EW3/>
                <EH3/>
                <div className="footer-item">
                    <FontAwesomeIcon icon={renderIcon(props.icon)} size="lg" color="rgb(180, 139, 62)" className="icon-arrow-left"/>
                    <EH1/>
                    <H4 className="h4-animation">{props.name}</H4>
                    <EH1/>
                    <H5 className="h5-pink-swan-center">{props.info}</H5>
                </div>
                <EW3/>
                <EH3/>
            </>
    );
}

export default FooterItem;
 