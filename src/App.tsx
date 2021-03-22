import React from 'react';
import './index.scss';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';
import    TagEdit from './views/TagEdit';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/tags">
                    <Tags></Tags>
                </Route>
                <Route exact path="/tags/:id">
                    <TagEdit></TagEdit>
                </Route>
                <Route exact path="/money">
                    <Money></Money>
                </Route>
                <Route exact path="/statistics">
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
