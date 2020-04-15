/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './footer.scss';

/**
* Components
*/

import FooterItem from '../../SmallParts/FooterItem/footerItem';

/**
* Utility
*/

import {
    H5,
    EH2
} from '../../UtilityComponents';

/**
* Images
*/

import MyLogo from '../../../images/finalLogoLight.png';
import MyLogoText from '../../../images/crypto.png';

/**
* Constants
*/

import {
    footerItems
} from '../../../constants/footerItems';

/**
* Footer component definition and export
*/

export const Footer = () => {

    /**
    * Methods
    */

    const renderFooterItems = () => {
        return(
        <div className="footer-items">
            {footerItems.map((el, i) => {
                return(
                    <FooterItem
                        key={i}
                        icon={el.icon}
                        name={el.name}
                        info={el.info}
                    />
                )
            })}
        </div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-image-logo">
                    <img src={MyLogo}/>
                </div>
                <div className="footer-text-logo">
                    <img src={MyLogoText}/>
                </div>
            </div>
            <EH2/>
            {renderFooterItems()}
            <EH2/>
            <EH2/>
            <H5 className="h5-pink-swan-center">© Copyright 2012 - 2020   |   Avada Theme by Theme Fusion   |   All Rights Reserved   |   Powered by WordPress </H5>
        </div>
    );
}

export default Footer;
 