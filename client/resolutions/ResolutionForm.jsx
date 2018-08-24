import React, {Component} from 'react';

class ResolutionForm extends Component {
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