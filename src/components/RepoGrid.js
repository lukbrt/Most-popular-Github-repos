import React, { Component } from 'react';
import '../App.css';
import RepoBox from './RepoBox';
import styled from 'styled-components';

const clientId = '898f9e9639fc081d5302',
    clientSecret = 'ff68f3cbf56aff311fd6e9615a15f9dad76938bb';
let language = 'all';

const getEncodedURI = (lang) => (
        window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+
        language:${language}&sort=stars&order=desc&type=Repositories&client_id=${clientId}
        &client_secret=${clientSecret}&`)
    );

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 50px;
    padding: 100px 0;
`;

class RepoGrid extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        const newLang = this.props.location.pathname.substring(1);
        language = newLang !== "" ? newLang : 'all';

        fetch(getEncodedURI())
            .then(response => response.json())
            .then(json => this.setState({ items: json.items }))
            .then(() => console.log(this.state.items));
    }

    render() {
        let number = 1;

        return (
            <StyledGrid>
                {this.state.items.map(currentItem =>
                    <RepoBox
                        item={currentItem}
                        key={number}
                        nr={number++}
                    />
                )}
            </StyledGrid>
        );
    }
}

export default RepoGrid;