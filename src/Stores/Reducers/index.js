import {combineReducers} from 'redux';
import localizeReducer from './LocalizeReducer';
import languageReducer from './ConfigReducer';
import upLoadProductReducer from './UpLoadProductReducer';
import userReducer from './UserReducer';
import productReducer from './ProductReducer';
const rootReducer = combineReducers({
    localize: localizeReducer,
    language:languageReducer,
    upLoadProductReducer,
    userReducer,
    productReducer
});

export default rootReducer;