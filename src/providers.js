import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/index';
// COMPONENTS
import Loader from 'components/ui/loader';
import Snackbar from 'components/ui/snackbar';

function Providers({ children }) {
    return (
        <Provider store={store}>
            {children}
            <Loader />
            <Snackbar />
        </Provider>
    );
}

export default Providers;
