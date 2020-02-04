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
