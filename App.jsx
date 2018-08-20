import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

const Resolutions = new Mongo.Collection("resolutions");

class App extends TrackerReact(Component) {
    resolutions() {
        return Resolutions.find().fetch();
    }

    addResolution(event) {
        event.preventDefault();
        let text = this.refs.resolution.value.trim();

        Resolutions.insert({
            text,
            complete: false,
            createdAt: new Date()
        });

        this.refs.resolution.value = '';
    }

    render() {
        let loading = <div> Loading </div>,
            res     = this.resolutions();

        return (res.length < 1) ?
        loading
        :
        <div>
            <h1>Resolutions app3</h1>
            <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
                <input 
                    type="text"
                    ref="resolution"
                    name="resolution"
                    placeholder="New resolution"
                />
            </form>

            <div>
                <p>{res[0].text}</p>
            </div>
        </div>;
    }
}

export default App;