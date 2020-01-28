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
    blogCards
} from '../constants/blogCards';

/**
* Constants
*/

import * as Utility from '../utility';

/**
* Epic
*/

export const startInitBlogSingleEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_INIT_BLOG_SINGLE),
        mergeMap((action) => {
            let blog = blogCards.find(x => x.id === action.blogId);

            return of(
                Actions.loadSingleBlog(blog),
            )   
        }),
                
    )

export default startInitBlogSingleEpic;
