import React from 'react';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import { ReactRenderer } from '@atlaskit/renderer';

import nodeProjectContent from '../assets/node-project-content.json';
import Heading from '@atlaskit/heading';

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
                            <ReactRenderer
                                document={nodeProjectContent.document}
                            />
                        </div>
                    </GridColumn>
                </Grid>
            </Page>
        </div>
    );
}
