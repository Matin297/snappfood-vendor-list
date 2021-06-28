import React from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';

function Loader({ loader }) {
    if (loader.isOpen)
        return createPortal(
            <div className="loader">
                <div className="loader__ring"></div>
            </div>,
            document.getElementById('loader')
        );
    return null;
}

const mapStateToProps = state => ({
    loader: state.loader
});

export default connect(mapStateToProps)(Loader);
