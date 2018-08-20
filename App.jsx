import React, {Component} from 'react';
import {Mongo} from 'meteor/mongo';

const Resols = new Mongo.Collection('resols');
class App extends Component {
    addResolution(event) {
        event.preventDefault();
        let text     = this.refs.resolution.value.trim(),
            newResol = {
                text,
                complete: false,
                createdAt: new Date()
            }
            
        Resols.insert(newResol);

        this.refs.resolution.value = '';
    }

    render() {
        return (
            <div>
                <h1>Resolutions app1</h1>
                <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
                    <input
                        type="text"
                        name="resolution"
                        ref="resolution"
                        placeholder="Enter a new resolution"
                    />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default App;