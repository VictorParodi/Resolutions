import React, {Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';

function goToPortfolio() {
    FlowRouter.go('portfolio');
}

const MainLayout = ({content}) => {
    return (
        <div className="main-layout">
            <header>
                <h2>Resolutions</h2>

                <nav>
                    <a href="/">Resolutions</a>
                    <a href="/about">About</a>
                    <a href="" onClick={goToPortfolio}>Portfolio</a>
                </nav>
            </header>

            <main>
                {content}
            </main>
        </div>
    );
}

export default MainLayout;