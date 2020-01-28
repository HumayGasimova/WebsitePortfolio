import * as actionTypes from '../constants/actionTypes';

export function toggleMenuButton() {
    return { 
        type: actionTypes.TOGGLE_MENU_BUTTON
    };
};

export function menuButtonIsToggled(val) {
    return { 
        type: actionTypes.MENU_BUTTON_IS_TOGGLED,
        val: val
    };
};

export function initFeedbacks(array, arrayToShow) {
    return { 
        type: actionTypes.INIT_FEEDBACKS,
        array: array,
        arrayToShow: arrayToShow
    };
};

export function leftArrowOnClick() {
    return { 
        type: actionTypes.LEFT_ARROW_ON_CLICK
    };
};

export function rightArrowOnClick() {
    return { 
        type: actionTypes.RIGHT_ARROW_ON_CLICK
    };
};

export function chooseDotOnScroll(id) {
    return { 
        type: actionTypes.CHOOSE_DOT_ON_SCROLL,
        id: id
    };
};

export function startAddingClassNameToFeedbackCard(id, update) {
    return { 
        type: actionTypes.START_ADDING_CLASSNAME_TO_FEEDBACK_CARD,
        id: id,
        update: update
    };
};

export function updateFeedbackCardStyle(cardId, str) {
    return { 
        type: actionTypes.UPDATE_FEEDBACK_CARD_STYLE,
        cardId: cardId,
        className: str
    };
};

export function feedbacksUpdated(val) {
    return { 
        type: actionTypes.FEEDBACKS_UPDATED,
        val: val
    };
};

export function feedbacksStylesUpdated(id, val) {
    return { 
        type: actionTypes.FEEDBACKS_STYLES_UPDATED,
        id: id,
        val: val
    };
};

export function chooseFeedback(id) {
    return { 
        type: actionTypes.CHOOSE_FEEDBACK,
        dotId: id
    };
};

export function initPortfolio(array) {
    return { 
        type: actionTypes.INIT_PORTFOLIO,
        array: array
    };
};

export function startInitPagination(page) {
    return { 
        type: actionTypes.START_INIT_PAGINATION,
        page: page
    };
};

export function initPagination(array) {
    return { 
        type: actionTypes.INIT_PAGINATION,
        array: array
    };
};

export function startChoosingPage(page, id) {
    return { 
        type: actionTypes.START_CHOOSING_PAGE,
        page: page,
        id: id
    };
};

export function choosePage(id) {
    return { 
        type: actionTypes.CHOOSE_PAGE,
        id: id
    };
};

export function loadPortfolioAccordingToPage(array) {
    return { 
        type: actionTypes.LOAD_PORTFOLIO_ACCORDING_TO_PAGE,
        array: array
    };
};

export function startChoosingPortfolioPageOnArrowButton(direction) {
    return { 
        type: actionTypes.START_CHOOSING_PORTFOLIO_PAGE_ON_ARROW_BUTTON,
        direction: direction
    };
};

export function startChoosingPortfolioSinglePageOnArrowButton(direction) {
    return { 
        type: actionTypes.START_CHOOSING_PORTFOLIO_SINGLE_PAGE_ON_ARROW_BUTTON,
        direction: direction
    };
};

export function updatePaging(array) {
    return { 
        type: actionTypes.UPDATE_PAGING,
        array: array
    };
};

export function updatePortfolio(array) {
    return { 
        type: actionTypes.UPDATE_PORTFOLIO,
        array: array
    };
};

export function disablePaginationArrowButton(direction) {
    return { 
        type: actionTypes.DISABLE_PAGINATION_ARROW_BUTTON,
        direction: direction
    };
};

export function startInitPortfolioSingle(id) {
    return { 
        type: actionTypes.START_INIT_PORTFOLIO_SINGLE,
        potfolioId: id
    };
};

export function loadSinglePortfolio(obj) {
    return { 
        type: actionTypes.LOAD_SINGLE_PORTFOLIO,
        obj: obj
    };
};

export function startShowingCommentInputArea(threadId, userId, thread) {
    return { 
        type: actionTypes.START_SHOWING_COMMENT_INPUT_AREA,
        threadId: threadId,
        userId: userId,
        thread: thread
    };
};

export function startAddingReply(val, threadId, userId, thread) {
    return { 
        type: actionTypes.START_ADDING_REPLY,
        comment: val,
        threadId: threadId,
        userId: userId,
        thread : thread
    };
};

export function initLeaveCommentForm(obj) {
    return { 
        type: actionTypes.INIT_LEAVE_COMMENT_FORM,
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

export function initBlogCards(array) {
    return { 
        type: actionTypes.INIT_BLOG_CARDS,
        array: array
    };
};

export function loadBlogCardsToBlogPage(array) {
    return { 
        type: actionTypes.LOAD_BLOG_CARDS_TO_BLOG_PAGE,
        array: array
    };
};

export function startChoosingBlogCardsOnArrowButton(direction) {
    return { 
        type: actionTypes.START_CHOOSING_BLOG_CARDS_ON_ARROW_BUTTON,
        direction: direction
    };
};

export function startInitBlogSingle(id) {
    return { 
        type: actionTypes.START_INIT_BLOG_SINGLE,
        blogId: id
    };
};

export function loadSingleBlog(obj) {
    return { 
        type: actionTypes.LOAD_SINGLE_BLOG,
        obj: obj
    };
};

export function startChoosingSingleBlogCardsOnArrowButton(direction) {
    return { 
        type: actionTypes.START_CHOOSING_SINGLE_BLOG_CARDS_ON_ARROW_BUTTON,
        direction: direction
    };
};

export function initSendMessageForm(obj) {
    return { 
        type: actionTypes.INIT_SEND_MESSAGE_FORM,
        obj: obj
    };
};

export function postMessage() {
    return { 
        type: actionTypes.POST_MESSAGE
    };
};
