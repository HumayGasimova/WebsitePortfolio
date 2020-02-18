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
    categoriesArray
} from '../constants/categoriesArray';

import {
    storiesArray
} from '../constants/storiesArray';

/**
* Epic
*/

export const startInitCategoriesEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_INIT_CATEGORIES),
        mergeMap((action) => {
            let updatedCategoriesArray = [...categoriesArray];
            let categoriesMonthObj = {}

            // if(action.path){
            //     let obj = archievesMonths.find(x => x.path === action.path);
            //     if(obj){
            //         archievesMonthObj = {...obj, text: obj.text.toUpperCase()};
            //     }
            // }

            return of(
                Actions.initCategories(updatedCategoriesArray),
                // Actions.initArchievesMonth(archievesMonthObj),
            )  
        })                
    )

export default startInitCategoriesEpic;
