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
    portfolioArray
} from '../constants/portfolio';

/**
* Constants
*/

import * as Utility from '../utility';

/**
* Epic
*/

export const startInitPortfolioSingleEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_INIT_PORTFOLIO_SINGLE),
        mergeMap((action) => {
            let portfolio = portfolioArray.find(x => x.id === action.potfolioId);

            return of(
                Actions.loadSinglePortfolio(portfolio),
            )   
        }),
                
    )

export default startInitPortfolioSingleEpic;
