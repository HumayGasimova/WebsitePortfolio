import { combineEpics } from 'redux-observable';
import * as Epic from './index'

export const rootEpic = combineEpics(
    Epic.startInitStoriesEpic,
    Epic.startInitRelatedPostsEpic,
    Epic.startInitPopularAndRecentStoriesEpic,
    Epic.startInitArchievesEpic,
    Epic.startInitCategoriesEpic,
    Epic.startInitRecentPostsEpic
);
