import * as actionTypes from '../constants/actionTypes';

export function initMenuItems(array) {
    return { 
        type: actionTypes.INIT_MENU_ITEMS,
        array: array
    };
};

export function activateMenuItem(id) {
    return { 
        type: actionTypes.ACTIVATE_MENU_ITEM,
        id: id
    };
};

export function initMenuFood(array) {
    return { 
        type: actionTypes.INIT_MENU_FOOD,
        array: array
    };
};
