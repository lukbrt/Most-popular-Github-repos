import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RepoGrid from './components/RepoGrid';

class App extends Component {
	render() {
		return (
			<div className="App">
				<RepoGrid />
			</div>
		);
	}
}

export default App;
