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
    archievesMonths: [],
    archievesMonth: {},
    categories: [],
    categoryStories: {},
    recentPosts: [],
    gallery: {
        show: false,
        currentId: 0,
        imagesArray: [],
        imgFromStories: [],
        imgFromArchieve: [],
        imgFromCategories: [],
        imgFromRelatedPosts: []
    },
    getInTouchInputForm: {},
    customerMessages:[]
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
    // let updatedRelatedPosts = [...state.relatedPosts];
    // let firstElement = state.relatedPosts[0];
    // let lastElement = state.relatedPosts[state.relatedPosts.length - 1];
  
    // // updatedRelatedPosts.unshift(lastElement);
    // // updatedRelatedPosts.push(firstElement);

    // return {
    //     ...state,
    //     relatedPosts: updatedRelatedPosts
    // };
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
        case 'getInTouchInputForm':
            return {
                ...state,
                getInTouchInputForm: updatedInputFieldObj
            };
    }
}


const postComment = (state, action) => {
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
        // console.log(updatedLeaveACommentInputForm)
    }
    
    return {
        ...state,
        singleStory: updatedSingleStory,
        leaveACommentInputForm: updatedLeaveACommentInputForm
    }; 
}

const sendComment = (state, action) => {
    let updatedCustomerMessages = [...state.customerMessages];
    let updatedGetInTouchInputForm = {...state.getInTouchInputForm, inputsArray: [...state.getInTouchInputForm.inputsArray]};
    if(state.getInTouchInputForm.formIsValid && state.getInTouchInputForm.inputsArray){
        let message = {
            id: uuid(),
            name: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "name").value}`,
            email: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "email").value}`,
            phone: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "phoneNumber").value}`,
            location: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "location").value}`,
            partyOf2: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "partyOf2").value}`,
            date: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "date").value}`,
            specialNote: state.getInTouchInputForm.inputsArray.find(x => x.controlName === "specialNote").value,
        }
        updatedCustomerMessages.push(message);
        updatedGetInTouchInputForm.inputsArray = updatedGetInTouchInputForm.inputsArray.map(el => {return {...el, value: ''}});
        
        updatedGetInTouchInputForm.formIsValid = false;
        updatedGetInTouchInputForm.inputsArray = updatedGetInTouchInputForm.inputsArray.map(el => {return {...el, value: '', validField: false, touched: false}});
    }else{
        updatedGetInTouchInputForm.inputsArray = updatedGetInTouchInputForm.inputsArray.map((el, i) => {
            return {
                    ...el, 
                    touched: true,
                    errorMessage: ["Fill the field"]
                }
                
        })
        // console.log(updatedLeaveACommentInputForm)
    }
    
    return {
        ...state,
        customerMessages: updatedCustomerMessages,
        getInTouchInputForms: updatedGetInTouchInputForm
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

const initArchievesMonth = (state, action) => {
    return {
        ...state,
        archievesMonth: action.obj
    };
} 

const showArchievesStoriesOfMonth = (state, action) => {
    let updatedArchievesMonth = {...state.archievesMonth};
    updatedArchievesMonth.show = !updatedArchievesMonth.show;
    return {
        ...state,
        archievesMonth: updatedArchievesMonth
    };
}

const initCategories = (state, action) => {
    return {
        ...state,
        categories: action.array
    };
}

const initCategoryStories = (state, action) => {
    return {
        ...state,
        categoryStories: action.obj
    };
}

const showCategoryStoriesOfMonth = (state, action) => {
    let updatedCategoryStories = {...state.categoryStories};
    let obj = updatedCategoryStories.storiesArrayOfCategories.find(x => x.key === action.key);
    obj.show = !obj.show;
    let objIndex = updatedCategoryStories.storiesArrayOfCategories.findIndex(x => x.key === action.key);

    updatedCategoryStories.storiesArrayOfCategories.splice(objIndex, 1, obj);

    return {
        ...state,
        categoryStories: updatedCategoryStories
    };
}

const addRecentPosts = (state, action) => {

    return {
        ...state,
        recentPosts: action.array
    };
}

const openGallery = (state, action) => {

    let updateImageArray = [];
    let index;
    let setOfImg1;
    let setOfImg2;

    if(action.page === "Stories"){
        index = state.gallery.imgFromStories.findIndex(x => x.id === action.id);
        setOfImg1 = state.gallery.imgFromStories.slice(index,  state.gallery.imgFromStories.length);
        setOfImg2 = state.gallery.imgFromStories.slice(0, index);
    }

    if(action.page === "Archieve"){
        index = state.gallery.imgFromArchieve.findIndex(x => x.id === action.id);
        setOfImg1 = state.gallery.imgFromArchieve.slice(index,  state.gallery.imgFromArchieve.length);
        setOfImg2 = state.gallery.imgFromArchieve.slice(0, index);
    }

    if(action.page === "Category"){
        index = state.gallery.imgFromCategories.findIndex(x => x.id === action.id);
        setOfImg1 = state.gallery.imgFromCategories.slice(index,  state.gallery.imgFromCategories.length);
        setOfImg2 = state.gallery.imgFromCategories.slice(0, index);
    }
    
    if(action.page === "Related posts"){
        index = state.gallery.imgFromRelatedPosts.findIndex(x => x.id === action.id);
        setOfImg1 = state.gallery.imgFromRelatedPosts.slice(index,  state.gallery.imgFromRelatedPosts.length);
        setOfImg2 = state.gallery.imgFromRelatedPosts.slice(0, index);
    }

    updateImageArray = updateImageArray
                        .concat(setOfImg1)
                        .concat(setOfImg2)
                        .map(el => el.image)

    let updatedGallery = {
        ...state.gallery,
        show: true,
        currentId: action.id,
        imagesArray: updateImageArray
    };

    return {
        ...state,
        gallery: updatedGallery
    };
}

const addGalleryImages = (state, action) => {
    let updatedGallery;

    if(action.page === "Stories"){
        updatedGallery = {...state.gallery, imgFromStories: [...state.gallery.imgFromStories]};
        action.array.map(el => {
            updatedGallery.imgFromStories.push(el);
        })
    }

    if(action.page === "Archieve"){
        updatedGallery = {...state.gallery, imgFromArchieve: [...state.gallery.imgFromArchieve]};
        action.array.map(el => {
            updatedGallery.imgFromArchieve.push(el);
        })
    }

    if(action.page === "Category"){
        updatedGallery = {...state.gallery, imgFromCategories: [...state.gallery.imgFromCategories]};
        action.array.map(el => {
            updatedGallery.imgFromCategories.push(el);
        })
    }

    if(action.page === "Related posts"){
        updatedGallery = {...state.gallery, imgFromRelatedPosts: [...state.gallery.imgFromRelatedPosts]};
        action.array.map(el => {
            updatedGallery.imgFromRelatedPosts.push(el);
        })
    }
    
    if(action.page === "clear"){
        updatedGallery = {
            ...state.gallery, 
            // imgFromStories:  action.array,
            imgFromArchieve: action.array,
            imgFromCategories: action.array,
            imgFromRelatedPosts: action.array,
        };
    }
    
    return {
        ...state,
        gallery: updatedGallery
    };
}

const closeGallery = (state, action) => {
    let updatedGallery = {
        ...state.gallery,
        show: false,
        currentId: 0,
        imagesArray: []
    };

    return {
        ...state,
        gallery: updatedGallery
    };
}

const initGetInTouchForm = (state, action) => {

    return {
        ...state,
        getInTouchInputForm: action.obj
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
        case actionTypes.INIT_ARCHIEVES_MONTH:
            return initArchievesMonth(state, action);
        case actionTypes.SHOW_ARCHIEVES_STORIES_OF_MONTH:
            return showArchievesStoriesOfMonth(state, action);
        case actionTypes.INIT_CATEGORIES:
            return initCategories(state, action);
        case actionTypes.INIT_CATEGORY_STORIES:
            return initCategoryStories(state, action);
        case actionTypes.SHOW_CATEGORY_STORIES_OF_MONTH:
            return showCategoryStoriesOfMonth(state, action);
        case actionTypes.ADD_RECENT_POSTS:
            return addRecentPosts(state, action);
        case actionTypes.OPEN_GALLERY:
            return openGallery(state, action);
        case actionTypes.ADD_GALLERY_IMAGES:
            return addGalleryImages(state, action);  
        case actionTypes.CLOSE_GALLERY:
            return closeGallery(state, action);    
        case actionTypes.INIT_GET_IN_TOUCH_FORM:
            return initGetInTouchForm(state, action);   
        case actionTypes.SEND_COMMENT:
            return sendComment(state, action);
        case actionTypes.START_INIT_POPULAR_AND_RECENT_STORIES:
            return state; 
        case actionTypes.SHOW_STORIES_OF_MONTH:
            return state;
        case actionTypes.START_INIT_RELATED_POSTS:
            return state;
        case actionTypes.START_INIT_ARCHIEVES:
            return state; 
        case actionTypes.START_INIT_CATEGORIES:
            return state; 
        case actionTypes.START_INIT_RECENT_POSTS:
            return state; 
        default: 
            return state;
    }
}

export default websiteThreeJsReducer;
