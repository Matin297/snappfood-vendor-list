import { takeLatest, put, call, select } from 'redux-saga/effects';
import endpoints from 'config/endpoints';
import request from 'config/request';
import { fetchVendorsFail, fetchVendorsSuccess, setFilters } from './actions';
import { openLoader, closeLoader } from '../loader/actions';
import { openSnackbar } from '../snackbar/actions';
import { FETCH_VENDORS } from './types';

const paramsSelector = state => state.vendors.params;

// GET ALL
function* fetchVendors(action) {
    try {

        yield put(openLoader());
        const params = yield select(paramsSelector);

        const res = yield call(
            request,
            'get',
            endpoints.vendors.get,
            {
                ...params,
                ...action.payload
            }
        );

        yield put(closeLoader());

        if (res.status === 200 && res.data.status) {
            yield put(fetchVendorsSuccess({
                clear: action.payload.page === 0,
                ...res.data.data
            }));
            yield put(setFilters({ ...action.payload }));
        } else {
            yield put(fetchVendorsFail());
            yield put(openSnackbar({ status: 'error', message: res?.data?.error || res.msg }));
        }

    } catch (e) {
        yield put(closeLoader());
        yield put(fetchVendorsFail());
    }

}

export default function* fetchVendorsWatcher() {
    yield takeLatest(FETCH_VENDORS, fetchVendors);
}
