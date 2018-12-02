import {combineReducers} from 'redux';
import localizeReducer from './LocalizeReducer';
import languageReducer from './ConfigReducer';
import upLoadProductReducer from './UpLoadProductReducer';
import userReducer from './UserReducer';
const rootReducer = combineReducers({
    localize: localizeReducer,
    language:languageReducer,
    upLoadProductReducer,
    userReducer,
});

export default rootReducer;