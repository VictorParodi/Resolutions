import React, {Component} from 'react';
import {Mongo} from 'meteor/mongo';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Resolutions = new Mongo.Collection("resolutions");

import ResolutionForm from './ResolutionForm';
import ResolutionSingle from './ResolutionSingle';

class ResolutionsWrapper extends TrackerReact(Component) {
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
            <ResolutionSingle resolution={res[1]} />
        </div>;
    }
}

export default ResolutionsWrapper;