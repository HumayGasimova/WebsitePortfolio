/**
* Operators
*/

import { 
    of
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

import {
    storiesArray
} from '../constants/storiesArray';

/**
* Epic
*/

export const startInitRecentPostsEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_INIT_RECENT_POSTS),
        mergeMap((action) => {
            let recentPosts = [...storiesArray];
           
            recentPosts = recentPosts
                .map((el, i) => {
                    return el.storiesArray;
                })
                .flat()
                .slice(0, 5);
                
            return of(
                Actions.addRecentPosts(recentPosts),
            )  
        })                
    )

export default startInitRecentPostsEpic;
