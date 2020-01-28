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
* Utility
*/

import * as Utility from '../utility';

/**
* Epic
*/

export const startAddingCommentEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_ADDING_REPLY),
        mergeMap((action) => {
            let date = Utility.getCurrentDateAndTime();
            console.log(date)
            let singlePortfolio = {...state$.value.home.singlePortfolio};
            let comment;
            let updatedObj;
            let updatedObjIndex;
            
            switch(action.thread){
                case "mainThread":
                    updatedObj = {...singlePortfolio.comments.array.find(x => x.id === action.userId), inputIsShown: false};
                    updatedObjIndex = singlePortfolio.comments.array.findIndex(x => x.id === action.userId);
                    let id = updatedObj.reply.arrayOfReplies.length;
                    comment =  {
                        id: id + 1,
                        image: "Name1",
                        fullName: "Name2",
                        date: date,
                        comment: action.comment,
                        inputIsShown: false,
                    }
                    updatedObj.reply.arrayOfReplies.push(comment);
                    singlePortfolio.comments.array.splice(updatedObjIndex, 1, updatedObj);
                    singlePortfolio.comments = {...singlePortfolio.comments, sum: singlePortfolio.comments.sum + 1}
                    break;
                case "threadN1":
                    singlePortfolio.comments.array.map(x => {
                        if(x.reply.threadId === action.threadId){
                            updatedObj = {...x.reply.arrayOfReplies.find(x => x.id === action.userId), inputIsShown: false};
                            updatedObjIndex = x.reply.arrayOfReplies.findIndex(x => x.id === action.userId);
                            if(updatedObj.reply){
                                let id = updatedObj.reply.arrayOfReplies.length;
                                comment =  {
                                    id: id + 1,
                                    image: "Name1",
                                    fullName: "Name3",
                                    date: date,
                                    comment: action.comment,
                                    inputIsShown: false,
                                }
                                updatedObj.reply.arrayOfReplies.push(comment);
                                x.reply.arrayOfReplies.splice(updatedObjIndex, 1, updatedObj);
                            }
                            
                            if(!updatedObj.reply){
                                let newReplies = {
                                    threadId: action.threadId + 1,
                                    arrayOfReplies: [
                                        {
                                            id: 1,
                                            image: "Name1",
                                            fullName: "Name3",
                                            date: date,
                                            comment: action.comment,
                                            inputIsShown: false,
                                        }
                                    ]
                                }
                                updatedObj = {...updatedObj, reply: newReplies};
                                x.reply.arrayOfReplies.splice(updatedObjIndex, 1, updatedObj);
                            }
                        }
                    })
                    singlePortfolio.comments = {...singlePortfolio.comments, sum: singlePortfolio.comments.sum + 1}
                    break;
                case "threadN2": 
                    break;
            }
                return of(
                    Actions.loadSinglePortfolio(singlePortfolio)
                )   
            }) 
    )

export default startAddingCommentEpic;
