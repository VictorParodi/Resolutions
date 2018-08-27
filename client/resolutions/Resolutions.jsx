import React, {Component} from 'react';
import {Mongo} from 'meteor/mongo';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Resolutions = new Mongo.Collection("resolutions");

import ResolutionForm from './ResolutionForm';
import ResolutionSingle from './ResolutionSingle';

class ResolutionsWrapper extends TrackerReact(Component) {
    constructor() {
        super();

        this.state = {
            subscriptions: {
                resolutions: Meteor.subscribe('allResolutions')
            }
        }
    }

    componentWillUnmount() {
        this.state.subscriptions.resolutions.stop();
    }

    resolutions() {
        return Resolutions.find().fetch();
    }

    render() {
        let loading = <div> Loading </div>,
            res     = this.resolutions();

        return (res.length < 1) ?
        loading
        :
        <div>
            <h1>Resolutions app3</h1>
            <ResolutionForm />
            <ul className="resolutions">
                {
                    res.map(function(resolution) {
                        return <ResolutionSingle key={resolution._id} resolution={resolution} />;
                    })
                }
            </ul>            
        </div>;
    }
}

export default ResolutionsWrapper;