import React from 'react';

function Layout({ title, children }) {
    return (
        <main className="layout">
            <section>
                {
                    title && <h1> {title} </h1>
                }
                {children}
            </section>
        </main>
    );
}

export default Layout;
