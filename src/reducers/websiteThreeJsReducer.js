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
    menuFood: [],
    menuDrinks: [],
    stories: [] ,
    singleStory: {}
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

    if(action.id !== null){
        let menuItem = {...updatedMenuItems.find(x => x.id === action.id), active: true};
        let menuIndex = updatedMenuItems.findIndex(x => x.id === action.id);
    
        updatedMenuItems.splice(menuIndex, 1, menuItem);
    }
   
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

const initMenuDrinks = (state, action) => {
    return {
        ...state,
        menuDrinks: action.array
    };
}

const addStoriesByMonth = (state, action) => {
    let updatedStories = [...state.stories];
    updatedStories.push(action.obj);
    return {
        ...state,
        stories: updatedStories
    };
}

const showStoriesOfMonth = (state, action) => {
    let updatedStories = [...state.stories];
    let storiesOfMonth = updatedStories.find(x => x.key === action.key);
    storiesOfMonth.show = !storiesOfMonth.show;
    let storiesOfMonthIndex = updatedStories.findIndex(x => x.key === action.key);
    updatedStories.splice(storiesOfMonthIndex, 1, storiesOfMonth);

    return {
        ...state,
        stories: updatedStories
    };
}

const initSingleStory = (state, action) => {
    return {
        ...state,
        singleStory: action.obj
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
        case actionTypes.INIT_MENU_DRINKS:
            return initMenuDrinks(state, action);
        case actionTypes.ADD_STORIES_BY_MONTH:
            return addStoriesByMonth(state, action);  
        case actionTypes.SHOW_STORIES_OF_MONTH:
            return showStoriesOfMonth(state, action); 
        case actionTypes.INIT_SINGLE_STORY:
            return initSingleStory(state, action);   
        case actionTypes.SHOW_STORIES_OF_MONTH:
            return state;
        default: 
            return state;
    }
}

export default websiteThreeJsReducer;
