import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component {
    render() {
        return (
            <p> From App.jsx component </p>
        );
    }
}

if(Meteor.isClient) {
    Meteor.startup(function() {
        render(
            <App/>,
            document.querySelector('#app-container')
        );
    });
}