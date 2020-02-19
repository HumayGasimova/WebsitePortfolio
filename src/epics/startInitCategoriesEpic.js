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
            let updatedStoriesArray = [...storiesArray];
            let categoryObj = {};

            updatedStoriesArray.map((el, i) => {
                el.storiesArray.map((el, i) => {
                    if(el.categories.includes(updatedCategoriesArray[0].key)){
                        updatedCategoriesArray[0].storiesArrayOfCategories.push(el); 
                    }
                    if(el.categories.includes(updatedCategoriesArray[1].key)){
                        updatedCategoriesArray[1].storiesArrayOfCategories.push(el); 
                    }
                    if(el.categories.includes(updatedCategoriesArray[2].key)){
                        updatedCategoriesArray[2].storiesArrayOfCategories.push(el); 
                    }
                    if(el.categories.includes(updatedCategoriesArray[3].key)){
                        updatedCategoriesArray[3].storiesArrayOfCategories.push(el); 
                    }
                    if(el.categories.includes(updatedCategoriesArray[4].key)){
                        updatedCategoriesArray[4].storiesArrayOfCategories.push(el); 
                    }
                    if(el.categories.includes(updatedCategoriesArray[5].key)){
                        updatedCategoriesArray[5].storiesArrayOfCategories.push(el); 
                    }
                    if(el.categories.includes(updatedCategoriesArray[6].key)){
                        updatedCategoriesArray[6].storiesArrayOfCategories.push(el); 
                    }
                })
            })

            updatedCategoriesArray = updatedCategoriesArray.map((el,i) => {
                let jan = el.storiesArrayOfCategories.filter(x => x.month === "January");
                let feb = el.storiesArrayOfCategories.filter(x => x.month === "February");
                return({
                    key: el.key,
                    category: el.category,
                    path: el.path,
                    storiesArrayOfCategories: [
                        {
                            key: "february20",
                            date: {
                                month: "FEBRUARY",
                                year: "2020"
                            },
                            show: true,
                            storiesArray: feb
                        },
                        {
                            key: "january20",
                            date: {
                                month: "JANUARY",
                                year: "2020"
                            },
                            show: true,
                            storiesArray: jan
                        }
                    ]
                })
            })
            
            if(action.path){
                let path = action.path.slice(9, action.path.length)
                let obj = updatedCategoriesArray.find(x => x.path === path);
                if(obj){
                    categoryObj = obj;
                }
            }
            
            return of(
                Actions.initCategories(updatedCategoriesArray),
                Actions.initCategoryStories(categoryObj),
            )  
        })                
    )

export default startInitCategoriesEpic;
