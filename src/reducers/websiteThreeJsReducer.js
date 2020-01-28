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
    // menuButtonIsPressed: false,
}

// const toggleMenuButton = (state) => {
//     return {
//         ...state,
//         menuButtonIsPressed: !state.menuButtonIsPressed
//     };
// }

const websiteThreeJsReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.TOGGLE_MENU_BUTTON:
            return toggleMenuButton(state, action);  
        default: 
            return state;
    }
}

export default websiteThreeJsReducer;
