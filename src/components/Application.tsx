import React from 'react';
import Navigation from './Navigation';
import Content from './Content';
import { fontFamily } from '@atlaskit/theme';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

export default function Application() {
    return (
        <IntlProvider locale="en">
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
        </IntlProvider>
    );
}
