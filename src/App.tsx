import React from 'react';
import './index.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Nav  from './components/Nav'

const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;


function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
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
                </Main>
                <Nav />
            </Wrapper>
        </Router>
    );
}

function NoMatch() {
    return (
        <div>
            404
        </div>
    );
}

function Tags() {
    return (
        <div>
            标签页
        </div>
    );
}

function Money() {
    return (
        <div>
            记账页
        </div>
    );
}

function Statistics() {
    return (
        <div>
            统计页
        </div>
    );
}

export default App;
