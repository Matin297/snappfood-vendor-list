import {
    FETCH_VENDORS,
    FETCH_VENDORS_FAIL,
    FETCH_VENDORS_SUCCESS,
    SET_FILTER
} from './types';

const initialState = {
    data: [],
    loading: false,
    params: {
        page_size: 20,
        page: 0,
        lat: 35.754,
        long: 51.328
    },
    sort_options: [],
    count: 0,
    open_count: 0
};

function vendorsReducer(vendors = initialState, action) {
    switch (action.type) {
        case FETCH_VENDORS:
            return {
                ...vendors,
                loading: true
            };

        case FETCH_VENDORS_FAIL:
            return {
                ...vendors,
                loading: false
            };

        case FETCH_VENDORS_SUCCESS:
            return {
                ...vendors,
                data: action.payload.clear ? action.payload.finalResult : vendors.data.concat(action.payload.finalResult),
                count: action.payload.count,
                open_count: action.payload.open_count,
                sort_options: action.payload.extra_sections.filters.top.data,
                loading: false,
            };

        case SET_FILTER: {
            return {
                ...vendors,
                params: {
                    ...vendors.params,
                    ...action.payload
                }
            }
        }

        default:
            return vendors;
    }
}

export default vendorsReducer;
