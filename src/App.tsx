import React from 'react';
import './index.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags">
                    <Tags></Tags>
                </Route>
                <Route path="/money">
                    <Money></Money>
                </Route>
                <Route path="/statistics">
                    <Statistics></Statistics>
                </Route>
                <Redirect exact from="/" to="/money"></Redirect>
                <Route path="*">
                    <NoMatch></NoMatch>
                </Route>
            </Switch>

        </Router>
    );
}

export default App;
