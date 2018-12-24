import React, { Component } from 'react';
import '../App.css';
// import styled from 'styled-components';

// const Box = styled.div`
//     border-radius: 50%;
//     width: 100px;
//     height: 100px;
// `;


class RepoBox extends Component {
    state = {

    }

    render() {
        const {item, nr} = this.props;

        console.log(item);
        return (
            <div className="box">
                <p style={{ fontWeight: 'bolder' }}>#{nr}</p>
                <a href={item.owner.html_url}>
                    <img 
                    src={item.owner.avatar_url} 
                    alt={'item nr' + nr}
                    className='round-img'
                    style={{ paddingBottom: "10px" }}
                />
                </a>
                <p 
                    className="crimson-colored" 
                    style={{ fontWeight: 'bolder' }}
                >
                    {item.name}
                </p>
                <p>@{item.owner.login}</p>
                <p>{item.stargazers_count} stars</p>
            </div>
        );
    }
}

export default RepoBox;