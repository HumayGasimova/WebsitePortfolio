import { 
    createSelector 
} from 'reselect';

const getMenuItems = (state) => state.home.menuItems;

export const getMenuItemsState = createSelector(
    [getMenuItems],
    (x) => x
);

const getMenuFood = (state) => state.home.menuFood;

export const getMenuFoodState = createSelector(
    [getMenuFood],
    (x) => x
);

const getMenuDrinks = (state) => state.home.menuDrinks;

export const getMenuDrinksState = createSelector(
    [getMenuDrinks],
    (x) => x
);

const getStories = (state) => state.home.stories;

export const getStoriesState = createSelector(
    [getStories],
    (x) => x
);

const getSingleStory = (state) => state.home.singleStory;

export const getSingleStoryState = createSelector(
    [getSingleStory],
    (x) => x
);

const getRelatedPosts = (state) => state.home.relatedPosts;

export const getRelatedPostsState = createSelector(
    [getRelatedPosts],
    (x) => x
);

const getLeaveACommentInputForm = (state) => state.home.leaveACommentInputForm;

export const getLeaveACommentInputFormState = createSelector(
    [getLeaveACommentInputForm],
    (x) => x
);

const getPopularVsRecentStories = (state) => state.home.popularVsRecentStories;

export const getPopularVsRecentStoriesState = createSelector(
    [getPopularVsRecentStories],
    (x) => x
);

const getArchievesMonths = (state) => state.home.archievesMonths;

export const getArchievesMonthsState = createSelector(
    [getArchievesMonths],
    (x) => x
);

const getArchievesMonth = (state) => state.home.archievesMonth;

export const getArchievesMonthState = createSelector(
    [getArchievesMonth],
    (x) => x
);

const getCategories = (state) => state.home.categories;

export const getCategoriesState = createSelector(
    [getCategories],
    (x) => x
);

const getCategoryStories = (state) => state.home.categoryStories;

export const getCategoryStoriesState = createSelector(
    [getCategoryStories],
    (x) => x
);

const getRecentPosts = (state) => state.home.recentPosts;

export const getRecentPostsState = createSelector(
    [getRecentPosts],
    (x) => x
);

const getGallery = (state) => state.home.gallery;

export const getGalleryState = createSelector(
    [getGallery],
    (x) => x
);

const getGetInTouchInputForm = (state) => state.home.getInTouchInputForm;

export const getGetInTouchInputFormState = createSelector(
    [getGetInTouchInputForm],
    (x) => x
);
