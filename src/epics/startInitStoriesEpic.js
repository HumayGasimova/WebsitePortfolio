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
    storiesArray
} from '../constants/storiesArray';

/**
* Epic
*/

export const startInitStoriesEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_INIT_STORIES),
        mergeMap((action) => {
            let storiesFilteredByMonth = storiesArray.find(x => x.key === action.month);
            return of(
                Actions.addStoriesByMonth(storiesFilteredByMonth),
            )   
        }),
                
    )

export default startInitStoriesEpic;
