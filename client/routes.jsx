import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from './layouts/MainLayout';
import Resolutions from './resolutions/Resolutions';
import About from './About';
import Portfolio from './Portfolio';

FlowRouter.route('/', {
    name: 'home',
    action() {
        mount(
            MainLayout, {
                content: <Resolutions/>
            }
        );
    }
});

FlowRouter.route('/about', {
    name: 'about',
    action() {
        mount(
            MainLayout, {
                content: <About />
            }
        );
    }
});

FlowRouter.route('/portfolio', {
    name: 'portfolio',
    action() {
        mount(
            MainLayout, {
                content: <Portfolio />
            }
        );
    }
});