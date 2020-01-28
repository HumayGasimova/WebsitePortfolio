/**
* Operators
*/

import { 
    of,
    interval
} from 'rxjs';

import { 
    mergeMap
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

export const submitMessageEpic = (action$) => 
    action$.pipe(
        // ofType(actionTypes.SUBMIT_MESSAGE),
        // mergeMap(action => {
        //     let info = {
        //         name: action.name,
        //         email: action.email,
        //         contact: action.contact,
        //         company: action.company,
        //         message: action.message
        //     }
        //         return of(
        //             Actions.messageToSend(info),
        //         )   
        // })
    )
         
export default submitMessageEpic;
