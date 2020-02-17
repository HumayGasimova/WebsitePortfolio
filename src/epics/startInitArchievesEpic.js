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
    storiesArray
} from '../constants/storiesArray';

/**
* Epic
*/

export const startInitArchievesEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_INIT_ARCHIEVES),
        mergeMap((action) => {
            let archievesMonths = [...storiesArray];
            archievesMonths = archievesMonths.map(el => {
                return {
                    key: `${el.date.year}${el.date.month[0]}${el.date.month.slice(1,el.date.month.length).toLowerCase()}`,
                    path: `/${el.date.year}/${el.date.month[0]}${el.date.month.slice(1,el.date.month.length).toLowerCase()}`,
                    text: `${el.date.month[0]}${el.date.month.slice(1,el.date.month.length).toLowerCase()} ${el.date.year}`
                }
            })

            return of(
                Actions.addArchievesMonths(archievesMonths),
            )  
        })                
    )

export default startInitArchievesEpic;
