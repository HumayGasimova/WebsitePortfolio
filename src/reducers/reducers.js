import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import websitePortfolioReducer from './websitePortfolioReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    home: websitePortfolioReducer
});
