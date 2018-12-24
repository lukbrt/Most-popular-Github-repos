import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

const langs = [
	'all', 'javascript', 'ruby', 'java', 'css', 'python'
];

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation languages={langs} />

				{/* <header>
					{langs.map(lang => 
						<button 
							className="btn"
							key={lang}
						>
							{lang}
						</button>
					)}
				</header> */}
			</div>
		);
	}
}

export default App;
