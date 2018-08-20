import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

import MainLayout from './MainLayout';
import App from './../App';

FlowRouter.route('/', {
    action() {
        mount(
            MainLayout,
            {content: <App/>}
        );
    }
});