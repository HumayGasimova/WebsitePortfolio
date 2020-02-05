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

export function initMenuDrinks(array) {
    return { 
        type: actionTypes.INIT_MENU_DRINKS,
        array: array
    };
};

export function startInitStories(month) {
    return { 
        type: actionTypes.START_INIT_STORIES,
        month: month
    };
};

export function addStoriesByMonth(obj) {
    return { 
        type: actionTypes.ADD_STORIES_BY_MONTH,
        obj: obj
    };
};
