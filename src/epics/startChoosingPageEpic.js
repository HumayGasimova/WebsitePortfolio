/**
* Operators
*/

import { 
    of,
    interval,
    empty
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
    portfolioArray
} from '../constants/portfolio';

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

export const startChoosingPageEpic = (action$, state$, dependencies$) => 
    action$.pipe(
        ofType(actionTypes.START_CHOOSING_PAGE),
        mergeMap((action) => {
            let updatedArray;
            
            switch(action.page) {
                case "portfolioPage":
                    updatedArray = [...portfolioArray];
                    updatedArray = updatedArray.slice((action.id * 3) - 3, action.id * 3);
                    return of(
                        Actions.choosePage(action.id),
                        Actions.loadPortfolioAccordingToPage(updatedArray),
                        Actions.disablePaginationArrowButton("arrowLeft"),
                        Actions.disablePaginationArrowButton("arrowRight")
                    ) 
                case "portfolioSinglePage":
                    dependencies$.history.push(`/portfolioSingleId:${action.id}`, {id: action.id});
                    return of(
                        Actions.choosePage(action.id),
                        Actions.disablePaginationArrowButton("arrowLeft"),
                        Actions.disablePaginationArrowButton("arrowRight")
                    ) 
                case "blogPage":
                    updatedArray = [...blogCards];
                    updatedArray = updatedArray.slice((action.id * 6) - 6, action.id * 6);
                    console.log(updatedArray)
                    return of(
                        Actions.choosePage(action.id),
                        Actions.loadBlogCardsToBlogPage(updatedArray),
                        Actions.disablePaginationArrowButton("arrowLeft"),
                        Actions.disablePaginationArrowButton("arrowRight")
                    ) 
                case "blogSinglePage":
                    dependencies$.history.push(`/blogSingleId:${action.id}`, {id: action.id});
                    return of(
                        Actions.choosePage(action.id),
                        Actions.disablePaginationArrowButton("arrowLeft"),
                        Actions.disablePaginationArrowButton("arrowRight")
                    ) 
            }
            return empty();
        })
                
    )

export default startChoosingPageEpic;
