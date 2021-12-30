import React from 'react';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import { ReactRenderer } from '@atlaskit/renderer';

import nodeProjectContent from '../assets/node-project-content.json';
import Heading from '@atlaskit/heading';

export default function Content() {
    return (
        <div style={{ marginTop: 60 }}>
            <Page>
                <Grid>
                    <GridColumn>
                        <div style={{ marginBottom: 40 }}>
                            <Heading level="h800">
                                {nodeProjectContent.title}
                            </Heading>
                        </div>
                        <ReactRenderer document={nodeProjectContent.document} />
                    </GridColumn>
                </Grid>
            </Page>
        </div>
    );
}
