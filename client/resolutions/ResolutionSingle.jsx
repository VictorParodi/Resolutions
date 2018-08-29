import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

class ResolutionSingle extends Component {
    toggleChecked() {
        let {_id, complete} = this.props.resolution;
        Meteor.call('toggleResolution', _id, complete);
    }

    deleteResolution() {
        let {_id} = this.props.resolution;
        Meteor.call('deleteResolution', _id);
    }

    render() {
        let {text, complete} = this.props.resolution,
            resolutionClass  = complete ? 'checked' : '',
            status           = complete ? <span className="completed">Completed</span> : '';

        return (
            <li className={resolutionClass}>
                <input
                    type="checkbox"
                    readOnly={true}
                    checked={complete}
                    onClick={this.toggleChecked.bind(this)}
                />
                {text} - {complete.toString()}
                {status}
                <button
                    className="btn-cancel"
                    onClick={this.deleteResolution.bind(this)}
                >
                    x
                </button>
            </li>
        );
    }
}

export default ResolutionSingle;