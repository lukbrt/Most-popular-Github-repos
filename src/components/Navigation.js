import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';
import '../App.css';
import Button from '../components/Button';
import RepoGrid from './RepoGrid';

class Navigation extends Component {

    state = {
        selected: 'all'
    }

    render() {
        const { languages } = this.props;

        return (
            <Router>
                <nav>
                    {languages.map(lang =>
                        <Button
                            className="btn"
                            key={lang}
                            language={lang}
                        />
                    )}

                    <Switch>
                        {languages.map(lang =>
                            <Route
                                exact path={'/' + lang}
                                component={RepoGrid}
                                key={lang}
                                language={lang}
                            />
                        )}
                    </Switch>
                </nav>
            </Router>
        )
    }
}

export default Navigation;