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

export function addRelatedPostsElement(str) {
    return { 
        type: actionTypes.ADD_RELATED_POSTS_ELEMENT,
        str: str
    };
};

export function initLeaveACommentForm(obj) {
    return { 
        type: actionTypes.INIT_LEAVE_A_COMMENT_FIELD,
        obj: obj
    };
};

export function setInputFiledValueAndCheckValidation(obj, e, id, formName) {
    return { 
        type: actionTypes.SET_INPUT_FIELD_VALUE_AND_CHESCK_VALIDATION,
        obj: obj,
        event: e,
        inputFieldId: id,
        formName: formName
    };
};

export function postComment() {
    return { 
        type: actionTypes.POST_COMMENT
    };
};

export function startInitPopularAndRecentStories(option) {
    return { 
        type: actionTypes.START_INIT_POPULAR_AND_RECENT_STORIES,
        option: option
    };
};

export function addPopularVsRecentStories(array) {
    return { 
        type: actionTypes.ADD_POPULAR_VS_RECENT_STORIES,
        array: array
    };
};

export function startInitArchieves(path) {
    return { 
        type: actionTypes.START_INIT_ARCHIEVES,
        path: path
    };
};

export function addArchievesMonths(array) {
    return { 
        type: actionTypes.ADD_ARCHIEVES_MONTHS,
        array: array
    };
};

export function initArchievesMonth(obj) {
    return { 
        type: actionTypes.INIT_ARCHIEVES_MONTH,
        obj: obj
    };
};

export function showArchievesStoriesOfMonth(key) {
    return { 
        type: actionTypes.SHOW_ARCHIEVES_STORIES_OF_MONTH,
        key: key
    };
};

export function startInitCategories(path) {
    return { 
        type: actionTypes.START_INIT_CATEGORIES,
        path: path
    };
};

export function initCategories(array) {
    return { 
        type: actionTypes.INIT_CATEGORIES,
        array: array
    };
};

export function initCategoryStories(obj) {
    return { 
        type: actionTypes.INIT_CATEGORY_STORIES,
        obj: obj
    };
};

export function showCategoryStoriesOfMonth(key) {
    return { 
        type: actionTypes.SHOW_CATEGORY_STORIES_OF_MONTH,
        key: key
    };
};

export function startInitRecentPosts() {
    return { 
        type: actionTypes.START_INIT_RECENT_POSTS
    };
};

export function addRecentPosts(array) {
    return { 
        type: actionTypes.ADD_RECENT_POSTS,
        array: array
    };
};

export function openGallery(id, page) {
    return { 
        type: actionTypes.OPEN_GALLERY,
        id: id,
        page: page
    };
};

export function addGalleryImages(array, page) {
    return { 
        type: actionTypes.ADD_GALLERY_IMAGES,
        array: array,
        page: page
    };
};

export function closeGallery() {
    return { 
        type: actionTypes.CLOSE_GALLERY
    };
};

export function initGetInTouchForm(obj) {
    return { 
        type: actionTypes.INIT_GET_IN_TOUCH_FORM,
        obj: obj
    };
};

export function sendComment() {
    return { 
        type: actionTypes.SEND_COMMENT
    };
};
