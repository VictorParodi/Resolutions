import React, {Component} from 'react';
import {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

const Resolutions = new Mongo.Collection("resolutions");

class App extends Component {
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
        return (
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
            </div>
        );
    }
}

export default App;