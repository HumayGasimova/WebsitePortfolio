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

export const startInitPopularAndRecentStoriesEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_INIT_POPULAR_AND_RECENT_STORIES),
        mergeMap((action) => {
            let updatedStoriesArray = [...storiesArray];
            let popularStories;
            updatedStoriesArray = updatedStoriesArray.map((el,i) => {
                return el.storiesArray;
            })
            updatedStoriesArray = updatedStoriesArray.flat();

            switch(action.option){
                case 'popular':
                    let popularityOrderArray = [];
                    updatedStoriesArray.map((el, i) => {
                        let obj = {
                            id: el.id,
                            popular: el.popular
                        }
                        popularityOrderArray.push(el.popular);
                    });
                    popularityOrderArray.sort((a, b) => b-a);
                    popularityOrderArray = popularityOrderArray.slice(0,3);
                    popularStories = updatedStoriesArray.filter(x => x.popular === popularityOrderArray[0]);
                    if(popularStories.length < 3){
                        popularStories = popularStories.concat(updatedStoriesArray.filter(x => x.popular === popularityOrderArray[1]));
                    }
                    if(popularStories.length < 3){
                        popularStories = popularStories.concat(updatedStoriesArray.filter(x => x.popular === popularityOrderArray[2]));
                    }
                    if(popularStories.length > 3){
                        popularStories = popularStories.slice(0, 3);
                    }
                    updatedStoriesArray = popularStories;
                    break;
                case 'recent':
                    updatedStoriesArray = updatedStoriesArray.slice(0,3);
                    break;
                case 'comments': 
                    updatedStoriesArray = [{
                        text: 'No comments have been published yet.'
                    }]
                    break;
            }
            return of(
                Actions.addPopularVsRecentStories(updatedStoriesArray),
            )
           
        })                
    )

export default startInitPopularAndRecentStoriesEpic;
