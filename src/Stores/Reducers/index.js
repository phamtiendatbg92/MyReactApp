import {combineReducers} from 'redux';
import localizeReducer from './LocalizeReducer';
import languageReducer from './ConfigReducer';
import registerModalReducer from './RegisterModalReducer';
import userReducer from './UserReducer';
import productReducer from './ProductReducer';
const rootReducer = combineReducers({
    localize: localizeReducer,
    language:languageReducer,
    registerModalReducer,
    userReducer,
    productReducer
});

export default rootReducer;