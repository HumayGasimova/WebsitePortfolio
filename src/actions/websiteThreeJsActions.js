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

export function startInitStories(index) {
    return { 
        type: actionTypes.START_INIT_STORIES,
        index: index
    };
};

export function addStoriesByMonth(obj) {
    return { 
        type: actionTypes.ADD_STORIES_BY_MONTH,
        obj: obj
    };
};

export function showStoriesOfMonth(key) {
    return { 
        type: actionTypes.SHOW_STORIES_OF_MONTH,
        key: key
    };
};

export function initSingleStory(obj) {
    return { 
        type: actionTypes.INIT_SINGLE_STORY,
        obj: obj
    };
};

export function startInitRelatedPosts(id) {
    return { 
        type: actionTypes.START_INIT_RELATED_POSTS,
        currentStoryId: id
    };
};

export function addRelatedPosts(array) {
    return { 
        type: actionTypes.ADD_RELATED_POSTS,
        array: array
    };
};

