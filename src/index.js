import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import axios from 'axios';
// import { takeEvery, }

// function* getElements() {
//     yield 
// }

// function* postElements() {

// }

const feelings = (state = 0, action) => {
    console.log('In FEELINGS function', action);
    if (action.type === 'SHARE_FEELINGS') {
        return action.payload;
    }
    return state;
}

const understanding = (state = 0, action) => {
    console.log('In UNDERSTANDING function', action);
    if (action.type === 'UNDERSTANDING_LVL') {
        return action.payload;
    }
    return state;
}

const support = (state = 0, action) => {
    console.log('In FEELINGS function', action);
    if (action.type === 'SUPPORT_LVL') {
        return action.payload;
    }
    return state;
}

const comments = (state = 0, action) => {
    console.log('In FEELINGS function', action);
    if (action.type === 'COMMENT') {
        return action.payload;
    }
    return state;
}

const liamsStore = createStore(
    combineReducers(
        {
            feelings,
            understanding,
            support,
            comments,
        }
    ),
    applyMiddleware(logger)
)


ReactDOM.render(
    <React.StrictMode>
        <Provider store={ liamsStore }>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
registerServiceWorker();