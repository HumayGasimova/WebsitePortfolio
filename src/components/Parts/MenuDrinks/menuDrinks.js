/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Styles
*/

import './menuDrinks.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Smoothie from '../../../images/smoothie-juice-raspberry-drink.jpg'

/**
* Utility
*/

import {
    H2,
    H4,
    H5,
    EH1,
    Line2
} from '../../UtilityComponents';

/**
* Constants
*/

import {
    menuDrinksArray
} from '../../../constants/menuDrinksArray';

/**
* MenuDrinks component definition and export
*/

export const MenuDrinks = (props) => {

    /**
    * Methods
    */

    useEffect(() => {
        props.initMenuDrinks(menuDrinksArray);
    }, []);

    const renderMenuDrinks = () => {
        return(
            <div className="menu-drinks-items">{props.menuDrinks.map((el, i) => {
                return(
                    <div key={i}>
                        <EH1/>
                        <H4 className="h4-white">
                            {el}
                        </H4>
                    </div>
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="menu-drinks">
            <div className="menu-drinks-description">
                <H2>DRINKS</H2>
                <EH1/>
                <Line2/>
                <EH1/>
                <H5>
                    Café au lait, breve coffee latte froth shop 
                    macchiato grinder. Wings cream steamed single 
                    shot, cup cinnamon et aroma acerbic chicory 
                    aroma java. Plunger pot medium, latte chicory 
                    coffee extra cappuccino siphon frappuccino 
                    extraction kopi-luwak chicory.
                </H5>
            </div>
            <div className="menu-drinks-wrapper">
                {renderMenuDrinks()}
                <div className="menu-drinks-image">
                    <img src={Smoothie}/>
                </div>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            menuDrinks: Selectors.getMenuDrinksState(state)
        };
    },
    (dispatch) => {
        return {
            initMenuDrinks: bindActionCreators(Actions.initMenuDrinks, dispatch)
        };
    }
)(MenuDrinks);
 