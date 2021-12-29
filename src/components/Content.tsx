import React from 'react';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import { fontFamily } from '@atlaskit/theme';

export default function Content() {
    return (
        <div>
            <Page>
                <Grid>
                    <GridColumn medium={8}>
                        <h1>Main heading</h1>
                        <p>Left content</p>
                    </GridColumn>
                    <GridColumn medium={4}>
                        <h2>Sidebar</h2>
                        <p>Right content</p>
                    </GridColumn>
                    <GridColumn>
                        <h2>Content below which takes up remaining space</h2>
                        <p>The whole page content</p>
                    </GridColumn>
                </Grid>
            </Page>
        </div>
    );
}
