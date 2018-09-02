import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Bert} from 'meteor/themeteorchef:bert';

class ResolutionForm extends Component {
    addResolution(event) {
        event.preventDefault();
        let text = this.refs.resolution.value.trim();

        if (text) {
            Meteor.call('addResolution', text, () => {
                this.refs.resolution.value = '';
            });
        } else {
            Bert.alert('Need a text for resolution', 'danger', 'growl-top-right', 'fa-frown-o');
        }
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