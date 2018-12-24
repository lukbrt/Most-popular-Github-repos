import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {

    state = {
        selected: false
    }

    render() {
        const { language } = this.props;

        return (
            <button
                className="btn"
                key={language}
            >
                <Link to={'/' + language}>{language}</Link>
            </button>
        )
    }
}

export default Button;