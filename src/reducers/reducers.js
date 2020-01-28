import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import websiteThreeJsReducer from './websiteThreeJsReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    home: websiteThreeJsReducer
});
