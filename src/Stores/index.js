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


const initializeStateData = () => {
    let initialState = {};
    
    initialState.localize = VN;
    initialState.language = languageConfig[VN];
    const isAuthen = localStorage.getItem("myApp_isAuthen");
    
    initialState.userReducer = {};
    if(isAuthen === "true")
    {
        initialState.userReducer.isAuthen = true;
        initialState.userReducer.role = 1;
    }
    else
    {   
        initialState.userReducer.isAuthen = false;
        initialState.userReducer.role = 0;
    }
    const data = [];
    for (let i = 0; i < 10; i++) {
      data[i] = {
        no: i,
        productName: "product name",
        branch: "branch",
        subBranch: "sub-branch",
        price:1000,
        inventory: 1
      }
    }
    initialState.productReducer = {};
    initialState.productReducer.productList = data;
    return initialState;
};
    
const createAppStore = () => {
    // get config language from config file
    
    /*
    const sagas = createSagaMiddleware();
    let middlewares;
    if (flMiddleWare) {
        middlewares = applyMiddleware(sagas, flMiddleWare);
    } else {
        middlewares = applyMiddleware(flMiddleWare);
    }
    */
    const initialState = initializeStateData();
    const store = createStore(rootReducer, initialState);
    //sagas.run(rootSaga);
    return store;
}

export default createAppStore;