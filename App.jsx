import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Resolutions = new Mongo.Collection("resolutions");

import ResolutionForm from './ResolutionForm';
import ResolutionSingle from './ResolutionSingle';

class App extends TrackerReact(Component) {
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

            <div>
                <ResolutionSingle resolution={res[1]} />
            </div>
        </div>;
    }
}

export default App;