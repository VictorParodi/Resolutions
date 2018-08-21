import React, {Component} from 'react';

class ResolutionSingle extends Component {
    render() {
        let {text, complete} = this.props.resolution;

        return (
            <li>
                {text} - {complete.toString()}
            </li>
        );
    }
}

export default ResolutionSingle;