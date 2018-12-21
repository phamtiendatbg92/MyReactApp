import { createStore } from "redux";
import rootReducer from "./Reducers";
import languageConfig from './Config/LanguageConfig';
import {VN} from '../Constants';
import ProductObject from 'Objects/ProductObject';

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
        const item = new ProductObject(i + 1, "product name " + (i + 1), "branch", "sub-branch", 1000);
        data.push(item);
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