import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const feelings = (state = 0, action) => {
    // console.log(`In FEELINGS function ${action.payload}`);
    if (action.type === 'SHARE_FEELINGS') {
       return action.payload;
    }
    return state;
}

const understanding = (state = 0, action) => {
    // console.log(`In UNDERSTANDING function ${action.payload}`);
    if (action.type === 'UNDERSTANDING_LVL') {
        return action.payload;
    }
    return state;
}

const support = (state = 0, action) => {
    // console.log(`In SUPPORT function ${action.payload}`);
    if (action.type === 'SUPPORT_LVL') {
        return action.payload;
    }
    return state;
}

const comments = (state = '', action) => {
    // console.log(`In COMMENTS function ${action.payload}`);
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