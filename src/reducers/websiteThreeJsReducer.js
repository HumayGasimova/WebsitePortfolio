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
    singleStory: {},
    relatedPosts: [],
    leaveACommentInputForm: {},
    archievesMonths: []
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

const addRelatedPosts = (state, action) => {
    return {
        ...state,
        relatedPosts: action.array
    };
} 

const addRelatedPostsElement = (state, action) => {
    let updatedRelatedPosts = [...state.relatedPosts];
    console.log(updatedRelatedPosts)
    let firstElement = state.relatedPosts[0];
    let lastElement = state.relatedPosts[state.relatedPosts.length - 1];
  
    updatedRelatedPosts.unshift(lastElement);
    updatedRelatedPosts.push(firstElement);

    return {
        ...state,
        relatedPosts: updatedRelatedPosts
    };
} 

const initLeaveACommentForm = (state, action) => {

    return {
        ...state,
        leaveACommentInputForm: action.obj
    };
} 

const setInputFiledValueAndCheckValidation = (state, action) => {
    let updatedInputFieldObj = {...action.obj, inputsArray: [...action.obj.inputsArray]};
    let inputField = updatedInputFieldObj.inputsArray.find(x => x.id === action.inputFieldId);
    let inputFieldIndex = updatedInputFieldObj.inputsArray.findIndex(x => x.id === action.inputFieldId);
    inputField = {
        ...inputField, 
        value: action.event.target.value,
        validation: Utility.checkValidity(action.event.target.value, inputField.validation),
        touched: true
    };

    inputField = {
        ...inputField, 
        errorMessage: Utility.errorMessages(inputField.inputFieldName, inputField.validation),
        validField: Utility.checkValidityOfField(inputField.validation),
    }
   
    updatedInputFieldObj.inputsArray.splice(inputFieldIndex, 1, inputField)

    let checkIfFormIsValid = updatedInputFieldObj.inputsArray.map(el => el.validField === true);
    updatedInputFieldObj = {...updatedInputFieldObj, formIsValid: checkIfFormIsValid.every(x => x === true)};

    switch(action.formName) {
        case 'leaveACommentInputForm':
            return {
                ...state,
                leaveACommentInputForm: updatedInputFieldObj
            };
        // case 'sendMessageForm':
        //     return {
        //         ...state,
        //         sendMessageForm: updatedInputFieldObj
        //     };
    }
}


const postComment = (state, action) => {
    console.log("d")
    let updatedSingleStory = {...state.singleStory};
    let updatedLeaveACommentInputForm = {...state.leaveACommentInputForm, inputsArray: [...state.leaveACommentInputForm.inputsArray]};
    if(state.leaveACommentInputForm.formIsValid && state.leaveACommentInputForm.inputsArray){
        let comment = {
            id: uuid(),
            image: "Name1",
            fullName: `${state.leaveACommentInputForm.inputsArray.find(x => x.controlName === "firstName").value}`,
            date: Utility.getCurrentDateAndTime(),
            comment: state.leaveACommentInputForm.inputsArray.find(x => x.controlName === "comment").value,
        }
        updatedSingleStory.comments.push(comment);
        updatedLeaveACommentInputForm.inputsArray = updatedLeaveACommentInputForm.inputsArray.map(el => {return {...el, value: ''}});
        
        updatedLeaveACommentInputForm.formIsValid = false;
        updatedLeaveACommentInputForm.inputsArray = updatedLeaveACommentInputForm.inputsArray.map(el => {return {...el, value: '', validField: false, touched: false}});
    }else{
        updatedLeaveACommentInputForm.inputsArray = updatedLeaveACommentInputForm.inputsArray.map((el, i) => {
            return {
                    ...el, 
                    touched: true,
                    errorMessage: ["Fill the field"]
                }
                
        })
        console.log(updatedLeaveACommentInputForm)
    }
    
    return {
        ...state,
        singleStory: updatedSingleStory,
        leaveACommentInputForm: updatedLeaveACommentInputForm
    }; 
}

const addPopularVsRecentStories = (state, action) => {
    return {
        ...state,
        popularVsRecentStories: action.array
    };
} 

const addArchievesMonths = (state, action) => {
    return {
        ...state,
        archievesMonths: action.array
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
        case actionTypes.ADD_RELATED_POSTS:
            return addRelatedPosts(state, action);
        case actionTypes.ADD_RELATED_POSTS_ELEMENT:
            return addRelatedPostsElement(state, action);
        case actionTypes.INIT_LEAVE_A_COMMENT_FIELD:
            return initLeaveACommentForm(state, action);
        case actionTypes.SET_INPUT_FIELD_VALUE_AND_CHESCK_VALIDATION:
            return setInputFiledValueAndCheckValidation(state, action); 
        case actionTypes.POST_COMMENT:
            return postComment(state, action); 
        case actionTypes.ADD_POPULAR_VS_RECENT_STORIES:
            return addPopularVsRecentStories(state, action);
        case actionTypes.ADD_ARCHIEVES_MONTHS:
            return addArchievesMonths(state, action);
        case actionTypes.START_INIT_POPULAR_AND_RECENT_STORIES:
            return state; 
        case actionTypes.SHOW_STORIES_OF_MONTH:
            return state;
        case actionTypes.START_INIT_RELATED_POSTS:
            return state;
        case actionTypes.START_INIT_ARCHIEVES:
            return state; 
        default: 
            return state;
    }
}

export default websiteThreeJsReducer;
