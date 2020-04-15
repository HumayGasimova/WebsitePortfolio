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

export const startInitArchievesEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_INIT_ARCHIEVES),
        mergeMap((action) => {
            let archievesMonths = [...storiesArray];
            let archievesMonthObj = {};
            let archieveImages = [];

            archievesMonths = archievesMonths.map(el => {
                return {
                        key: `${el.date.year}${el.date.month[0]}${el.date.month.slice(1,el.date.month.length).toLowerCase()}`,
                        path: `${el.date.year}/${el.date.month[0]}${el.date.month.slice(1,el.date.month.length).toLowerCase()}`,
                        header: `${el.date.month[0]}${el.date.month.slice(1,el.date.month.length).toLowerCase()} ${el.date.year}`,
                        show: true,
                        storiesArray: [...el.storiesArray.map(el => {
                                                return {
                                                    id: el.id,
                                                    day: el.day,
                                                    month: el.month,
                                                    year: el.year,
                                                    image: el.image,
                                                    header: el.header,
                                                    paragraphs: [...el.paragraphs],
                                                    comments: [...el.comments],
                                                    categories: [...el.categories],
                                                    popular: el.popular,
                                                    path: el.path
                                                }
                                        })]
                }
            })

            if(action.path){
                let obj = archievesMonths.find(x => x.path === action.path);
                if(obj){
                    archievesMonthObj = {...obj, header: obj.header.toUpperCase()};

                    archieveImages = archievesMonthObj.storiesArray.map((el, i) => {
                        return el
                    });
                }
            }

            return of(
                Actions.addArchievesMonths(archievesMonths),
                Actions.initArchievesMonth(archievesMonthObj),
                Actions.addGalleryImages(archieveImages, 'Archieve'),
            )  
        })                
    )

export default startInitArchievesEpic;
