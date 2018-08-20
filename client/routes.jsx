import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from './MainLayout';
import App from './../App';

FlowRouter.route('/', {
    action() {
        mount(
            MainLayout, {
                content: <App/>
            }
        );
    }
});