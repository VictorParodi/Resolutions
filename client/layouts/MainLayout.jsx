import React from 'react';

const MainLayout = ({content}) => {
    return (
        <div className="main-layout">
            <header>
                <h2>Resolutions</h2>

                <nav>
                    <a href="/">Resolutions</a>
                    <a href="/about">About</a>
                </nav>
            </header>

            <main>
                {content}
            </main>
        </div>
    );
}

export default MainLayout;