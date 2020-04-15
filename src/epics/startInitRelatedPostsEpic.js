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

export const startInitRelatedPostsEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_INIT_RELATED_POSTS),
        mergeMap((action) => {
            let updatedRelatedPosts = [...storiesArray];
            if(action.currentStoryId){
                updatedRelatedPosts = updatedRelatedPosts.map((el) => {
                    return el.storiesArray.filter(x => x.id !== action.currentStoryId);
                })
                updatedRelatedPosts = updatedRelatedPosts.flat();
                return of(
                    Actions.addRelatedPosts(updatedRelatedPosts),
                )   
            }else{
                return of(
                    Actions.addRelatedPosts([]),
                )   
            }
            
        })                
    )

export default startInitRelatedPostsEpic;
