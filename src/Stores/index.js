import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducers";
import rootSaga from "./Sagas";
import languageConfig from './Config/LanguageConfig';
import {VN} from '../Constants';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV !== "production" ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: "FL_HOME",
    }) : compose;



    
const createAppStore = () => {
    // get config language from config file
    let initialState = {};
    
    initialState.localize = VN;
    initialState.language = languageConfig[VN];
    const isAuthen = localStorage.getItem("myApp_isAuthen");
    console.log(isAuthen);
    initialState.userReducer = {};
    if(isAuthen === "true")
    {
        initialState.userReducer.isAuthen = true;
    }
    else
    {   
        initialState.userReducer.isAuthen = false;
    }
    
    /*
    const sagas = createSagaMiddleware();
    let middlewares;
    if (flMiddleWare) {
        middlewares = applyMiddleware(sagas, flMiddleWare);
    } else {
        middlewares = applyMiddleware(flMiddleWare);
    }
    */
    const store = createStore(rootReducer, initialState);
    //sagas.run(rootSaga);
    return store;
}

export default createAppStore;