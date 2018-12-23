import React, { Component } from 'react';
import '../App.css';

const clientId = '898f9e9639fc081d5302',
    clientSecret = 'ff68f3cbf56aff311fd6e9615a15f9dad76938bb',
    language = 'all';
const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+
        language:${language}&sort=stars&order=desc&type=Repositories&client_id=${clientId}
        &client_secret=${clientSecret}&`);

class RepoGrid extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        fetch(encodedURI)
            .then(response => response.json())
            .then(json => this.setState({ items: json.items }))
            .then(() => console.log(this.state.items));
    }

    render() {
        return (
            <div>
                test
            </div>
        );
    }
}

export default RepoGrid;