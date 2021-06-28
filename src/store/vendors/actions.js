import {
    FETCH_VENDORS,
    FETCH_VENDORS_FAIL,
    FETCH_VENDORS_SUCCESS,
    SET_FILTER
} from './types';

// GET ALL
export const fetchVendors = payload => ({ type: FETCH_VENDORS, payload });
export const fetchVendorsFail = payload => ({ type: FETCH_VENDORS_FAIL, payload });
export const fetchVendorsSuccess = payload => ({ type: FETCH_VENDORS_SUCCESS, payload });

// FILTERS
export const setFilters = payload => ({ type: SET_FILTER, payload });
