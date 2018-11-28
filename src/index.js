import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import createAppStore from './Stores';
import { Provider } from "react-redux";




(function initialize() {

    const store = createAppStore();

    
    const appRoot = (
        <Provider store={store}>
            <App />
        </Provider>
    )

    ReactDOM.render(appRoot, document.getElementById('root'));
})();




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
