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
    H2,
    H4,
    H5,
    EH1,
    EH2,
    EW1,
    Line
} from '../../UtilityComponents';

/**
* Images
*/

import Cake from '../../../images/cake.jpg';
import CoffeeCups from '../../../images/two-blue-white-and-red-coffee-cups-on-brown-leather-briefcase.jpg';

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
                <H2>A NEW WAY OF EATING</H2>
                <EH2/>
                <H4>AVADA CAFE EXTRAORDINARY FOOD AT UNBEATABLE PRICES</H4>
                <EH1/>
                <Line/>
                <EH1/>
                <EH1/>
                <div className="description-wrapper2">
                    <div>
                        <img src={Cake}/>
                    </div>
                    <EW1/>
                    <div className="description-image">
                        <img src={CoffeeCups}/>
                    </div>
                </div>
                <EH1/>
                <EH1/>
                <H5>
                    Café au lait, breve coffee latte froth shop macchiato grinder. 
                    Wings cream steamed single shot, cup cinnamon et aroma acerbic 
                    chicory aroma java. Plunger pot medium, latte chicory coffee 
                    extra cappuccino siphon frappuccino extraction kopi-luwak chicory. 
                    Flavour, body aromatic sit french press java. Qui kopi-luwak qui in 
                    mazagran galão decaffeinated java. Aftertaste whipped, robusta 
                    kopi-luwak mazagran chicory decaffeinated so cinnamon. Frappuccino 
                    grinder aged, mug plunger pot caramelization latte eu spoon. Cup, 
                    flavour, spoon plunger pot and, strong, macchiato organic whipped sugar.
                </H5>
                <EH1/>
                <EH1/>
                <Button
                    className="learn-more"
                    text="LEARN MORE"
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
 