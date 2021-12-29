import React from 'react';
import Navigation from './Navigation';
import Content from './Content';
import { fontFamily } from '@atlaskit/theme';

export default function Application() {
    return (
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
            <Content />
        </div>
    );
}
