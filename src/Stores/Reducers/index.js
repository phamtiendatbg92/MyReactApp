import {combineReducers} from 'redux';
import localizeReducer from './LocalizeReducer';
import languageReducer from './ConfigReducer';
import upLoadProductReducer from './UpLoadProductReducer';
import authenReducer from './AuthenReducer';
const rootReducer = combineReducers({
    localize: localizeReducer,
    language:languageReducer,
    upLoadProductReducer,
    authenReducer,
});

export default rootReducer;