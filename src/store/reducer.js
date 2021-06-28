import { combineReducers } from 'redux';
import vendorsReducer from './vendors/reducer';
import loaderReducer from './loader/reducer';
import snackbarReducer from './snackbar/reducer';

export default combineReducers({
    vendors: vendorsReducer,
    loader: loaderReducer,
    snackbar: snackbarReducer
});
