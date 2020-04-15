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

import './menuFood.scss';

/**
* Components
*/

import MenuFoodCard from '../../SmallParts/MenuFoodCard/menuFoodCard';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import {
    menuFoodArray
} from '../../../constants/menuFoodArray';

/**
* MenuFood component definition and export
*/

export const MenuFood = (props) => {

    /**
    * Methods
    */

    useEffect(() => {
        props.initMenuFood(menuFoodArray);
    }, []);

    const renderMenuFoodCards = () => {
        return(
            <>{props.menuFood.map((el, i) => {
                if(i % 2){
                    return(
                        <MenuFoodCard
                            key={i}
                            image={el.image}
                            header={el.header}
                            menu={el.menu}
                            promo={el.promo}
                        />
                    )
                }else{
                    return(
                        <MenuFoodCard
                            darkColor
                            key={i}
                            image={el.image}
                            header={el.header}
                            menu={el.menu}
                            promo={el.promo}
                        />
                    )
                }
               
            })}</>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="menu-food">
            {renderMenuFoodCards()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            menuFood: Selectors.getMenuFoodState(state)
        };
    },
    (dispatch) => {
        return {
            initMenuFood: bindActionCreators(Actions.initMenuFood, dispatch)
        };
    }
)(MenuFood);
 