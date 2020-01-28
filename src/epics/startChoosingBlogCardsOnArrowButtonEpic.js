/**
* Operators
*/

import { 
    of,
    interval
} from 'rxjs';

import { 
    mergeMap,
    takeUntil
} from 'rxjs/operators';

import { 
    ofType 
} from 'redux-observable';

/**
* Constants
*/

import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
import {
    blogCards
} from '../constants/blogCards';

/**
* Constants
*/

import * as Utility from '../utility';

/**
* Epic
*/

export const startChoosingBlogCardsOnArrowButtonEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_CHOOSING_BLOG_CARDS_ON_ARROW_BUTTON),
        mergeMap((action) => {
            let paging = [...state$.value.home.paging];
            let nextPageId;
            let nextPage;
            let nextPageIndex;

            switch (action.direction) {
                case 'arrowLeft':
                        nextPageId = paging.find(x => x.chosen === true).id - 1;
                        nextPage = {...paging.find(x => x.id === nextPageId), chosen: true};
                        nextPageIndex = paging.findIndex(x => x.id === nextPageId);
                    break;
                case 'arrowRight':
                        nextPageId = paging.find(x => x.chosen === true).id + 1;
                        nextPage = {...paging.find(x => x.id === nextPageId), chosen: true};
                        nextPageIndex = paging.findIndex(x => x.id === nextPageId);
                    break;
            }

            paging = paging.map((el, i) => {
                return {...el, chosen: false};
            });

            paging.splice(nextPageIndex, 1, nextPage);
            let updatedBlogCardsArray = [...blogCards];
            updatedBlogCardsArray = updatedBlogCardsArray.slice((nextPageId * 6) - 6, nextPageId * 6);
console.log(updatedBlogCardsArray)
            return of(
                Actions.updatePaging(paging),
                Actions.loadBlogCardsToBlogPage(updatedBlogCardsArray),
                Actions.disablePaginationArrowButton("arrowLeft"),
                Actions.disablePaginationArrowButton("arrowRight")
            )   
        }),
                
    )

export default startChoosingBlogCardsOnArrowButtonEpic;
