import {combineReducers} from 'redux';
import MyReducer from './myReducer';
const rootReducer = combineReducers({
    myRe : MyReducer,
});

export default rootReducer;