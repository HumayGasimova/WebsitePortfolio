/**
* Libraries
*/

import React from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

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

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Utility
*/

import {
    H2,
    H4,
    H5,
    EH1,
    EH2,
    EW2,
    Line1
} from '../../UtilityComponents';

/**
* Images
*/

import Cake from '../../../images/cake.jpg';
import CoffeeCups from '../../../images/two-blue-white-and-red-coffee-cups-on-brown-leather-briefcase.jpg';
import Plant from '../../../images/plant-stand-green-standing.jpg';

/**
* Constants
*/

import * as Colors from '../../../constants/colors';

/**
* Description component definition and export
*/

export const Description = (props) => {

    /**
    * Methods
    */

    const learnMoreHandler = () => {
        props.history.push(`/crypto-cafe/food-and-drink`);
        props.activateMenuItem(3);
    }

    /**
    * Markup
    */

    return(
        <>
            <div className="description">
                <div className="description-wrapper">
                    <H2>A NEW WAY OF EATING</H2>
                    <EH2/>
                    <H4>AVADA CAFE EXTRAORDINARY FOOD AT UNBEATABLE PRICES</H4>
                    <EH1/>
                    <Line1/>
                    <EH1/>
                    <EH1/>
                    <div className="description-wrapper2">
                        <div>
                            <img src={Cake}/>
                        </div>
                        <EW2/>
                        <EH1/>
                        <div className="description-image">
                            <img src={CoffeeCups}/>
                        </div>
                    </div>
                    <EH1/>
                    <EH1/>
                    <H5 textColor={Colors.EBB}>
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
                        onClick={learnMoreHandler}
                    />
                </div>
                <div className="description-image-big-screen">
                    <img src={Plant}/>
                </div>
            </div>
            <div className="description-image-small-screen">
                <img src={Plant}/>
            </div>
        </>
    );
}
 export default connect(
    null,
    (dispatch) => {
        return {
            activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(withRouter(Description));
 