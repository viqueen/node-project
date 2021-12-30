import React from 'react';
import Navigation from './Navigation';
import Content from './Content';
import { fontFamily } from '@atlaskit/theme';
import {
    HashRouter,
    Redirect,
    Route,
    Switch,
    useParams
} from 'react-router-dom';

export default function Application() {
    return (
        <HashRouter>
        <div
            style={{
                top: 0,
                position: 'fixed',
                left: 0,
                width: '100%',
                fontFamily: fontFamily()
            }}
        >
            <Navigation />
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home">
                    <Content />
                </Route>
            </Switch>
        </div>
        </HashRouter>
    );
}
