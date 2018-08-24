import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

class ResolutionForm extends Component {
    addResolution(event) {
        event.preventDefault();
        let text = this.refs.resolution.value.trim();

        Meteor.call('addResolution', text, () => {
            this.refs.resolution.value = '';
        });
    }

    render() {
        return (
            <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
                <input 
                    type="text"
                    ref="resolution"
                    name="resolution"
                    placeholder="New resolution"
                />
            </form>
        );
    }
}

export default ResolutionForm;