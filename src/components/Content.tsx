import React from 'react';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import sampleDocument from '../assets/sample-atlassian-document.json';
import { ReactRenderer } from '@atlaskit/renderer';

export default function Content() {
    return (
        <div>
            <Page>
                <Grid>
                    <GridColumn>
                        <ReactRenderer document={sampleDocument} />
                    </GridColumn>
                </Grid>
            </Page>
        </div>
    );
}
