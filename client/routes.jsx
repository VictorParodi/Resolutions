import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from './layouts/MainLayout';
import Resolutions from './resolutions/Resolutions';

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