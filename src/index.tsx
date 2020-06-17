import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import rootReducer from './reducers'
import {getOngoings} from "./actions/ongoing.action";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import axios from "axios"

const store = createStore(rootReducer, applyMiddleware(thunk));

const test = async () => {
    let res = await axios.get('http://localhost:3000/ongoings');

    store.dispatch(
        getOngoings(
            res.data
        )
    );
}

test();

console.log(store.getState());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
