import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducers";
import rootSaga from "./Sagas";
import languageConfig from './Config/LanguageConfig';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV !== "production" ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: "FL_HOME",
    }) : compose;



    
const createAppStore = () => {
    // get config language from config file
    let initialState = {};
    initialState.language = languageConfig;


    
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