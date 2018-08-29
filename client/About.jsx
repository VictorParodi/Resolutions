import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Session} from 'meteor/session';

function setVar() {
    Session.set('test', ' - WORK WELL');
    FlowRouter.go('home');
}

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quae corporis alias nostrum, 
                nobis asperiores reiciendis, quod minima porro animi, dignissimos inventore sint nulla tempora minus 
                id odit deleniti quibusdam.
            </p>
            <button onClick={setVar}>Set var</button>
        </div>
    )
}

export default About;