import { all } from 'redux-saga/effects';
// Import the sagas
import productsSaga from './vendors/saga';

function* rootSaga() {
    yield all([
        productsSaga()
    ]);
}

export default rootSaga;
