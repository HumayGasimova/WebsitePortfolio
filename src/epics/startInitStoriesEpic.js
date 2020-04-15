/**
* Operators
*/

import { 
    of,
    empty
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

export const startInitStoriesEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_INIT_STORIES),
        mergeMap((action) => {
            if(storiesArray.length >= action.index + 1){
                let imagesArray = [];
                let storiesFilteredByMonth = storiesArray[action.index];
                imagesArray = storiesFilteredByMonth.storiesArray.map(el => {
                    return el;
                })
                
                return of(
                    Actions.addStoriesByMonth(storiesFilteredByMonth),
                    Actions.addGalleryImages(imagesArray, 'Stories'),
                );
            }else{
                return empty();
            }
        })                
    )

export default startInitStoriesEpic;
