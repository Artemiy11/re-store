import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CardPage } from '../pages';
import './app.css';
import ShopHeader from '../header';

const App = () => {
    return (
        <>
            <ShopHeader numItems={3} total={210} />
            <div className="container">
                <Switch>
                    <Route component={HomePage} path="/" exact />
                    <Route component={CardPage} path="/card" />
                </Switch>
            </div>
        </>
    )
}

export default App;