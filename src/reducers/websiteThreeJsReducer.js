/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Utility
*/

import * as Utility from "../utility";
import uuid from "uuid";

/**
* Initial State
*/

export const initialState = {
    menuItems: [],
    menuFood: []
}

const initMenuItems = (state, action) => {
    return {
        ...state,
        menuItems: action.array,
    };
}

const activateMenuItem = (state, action) => {
    let updatedMenuItems = [...state.menuItems];
    updatedMenuItems = updatedMenuItems.map(el => {
        return {...el, active: false}
    })

    let menuItem = {...updatedMenuItems.find(x => x.id === action.id), active: true};
    let menuIndex = updatedMenuItems.findIndex(x => x.id === action.id);

    updatedMenuItems.splice(menuIndex, 1, menuItem);

    return {
        ...state,
        menuItems: updatedMenuItems
    };
}

const initMenuFood = (state, action) => {
    return {
        ...state,
        menuFood: action.array
    };
}

const websiteThreeJsReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INIT_MENU_ITEMS:
            return initMenuItems(state, action);  
        case actionTypes.ACTIVATE_MENU_ITEM:
            return activateMenuItem(state, action);  
        case actionTypes.INIT_MENU_FOOD:
            return initMenuFood(state, action); 
        default: 
            return state;
    }
}

export default websiteThreeJsReducer;
