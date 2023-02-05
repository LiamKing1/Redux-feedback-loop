import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// function* getElements() {

// }

// function* postElements() {

// }

const feelings = (state = 0, action) => {
    console.log('In FEELINGS function', action);
    return state;
}

const liamsStore = createStore(
    combineReducers(
        {
            feelings,
        }
    ),
    // applyMiddleware(logger)
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