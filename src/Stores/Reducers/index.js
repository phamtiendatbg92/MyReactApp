import {combineReducers} from 'redux';
import localizeReducer from './LocalizeReducer';
import languageReducer from './ConfigReducer';
const rootReducer = combineReducers({
    localize: localizeReducer,
    language:languageReducer,
});

export default rootReducer;