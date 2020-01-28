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

/**
* Epic
*/

export const startChangingFeedbacksEpic = (action$) => 
    action$.pipe(
        // ofType(actionTypes.START_CHANGING_FEEDBACKS),
        // mergeMap(() => {
        //     return interval(3000).pipe(
        //         mergeMap(() => {
        //             return of(
        //                 Actions.feedbackOnChange(),
        //                 Actions.dotOnChange(),
        //             )   
        //         }),
        //         takeUntil(action$.ofType(actionTypes.STOP_CHANGING_FEEDBACKS))
            // )
        // })
    )

export default startChangingFeedbacksEpic;
