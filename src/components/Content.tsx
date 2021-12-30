import React from 'react';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import { ReactRenderer } from '@atlaskit/renderer';

import nodeProjectContent from '../assets/node-project-content.json';
import Heading from '@atlaskit/heading';
import { Provider } from '@atlaskit/smart-card';
import SimpleCardClient from './cards/SimpleCardClient';

export default function Content() {
    return (
        <div style={{ marginTop: 60 }}>
            <Page>
                <Grid spacing="compact">
                    <GridColumn>
                        <div style={{ marginBottom: 30 }}>
                            <Heading level="h800">
                                {nodeProjectContent.title}
                            </Heading>
                        </div>
                    </GridColumn>
                    <GridColumn>
                        <div
                            style={{
                                overflow: 'auto',
                                maxHeight: '1300px'
                            }}
                        >
                            <Provider client={new SimpleCardClient()}>
                                <ReactRenderer
                                    document={nodeProjectContent.document}
                                />
                            </Provider>
                        </div>
                    </GridColumn>
                </Grid>
            </Page>
        </div>
    );
}
