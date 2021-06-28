import React from 'react';

function Button({ children, ...props }) {
    return (
        <button
            className="button button--contained"
            {...props}
        >
            <div>{children}</div>
        </button>
    )
}

export default Button
