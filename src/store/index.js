import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const composedEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, composedEnhancers);
sagaMiddleware.run(rootSaga);

export {
    store
};
