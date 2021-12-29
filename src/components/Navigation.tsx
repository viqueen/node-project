import React from 'react';
import {
    AtlassianNavigation,
    CustomProductHome,
    PrimaryButton,
    generateTheme
} from '@atlaskit/atlassian-navigation';
import viqueenIcon from '../assets/viqueen-icon.png';

const theme = generateTheme({
    name: 'high-contrast',
    backgroundColor: '#272727',
    highlightColor: '#E94E34'
});

const ViqueenHome = () => {
    return (
        <CustomProductHome
            iconAlt="viqueen.org"
            iconUrl={viqueenIcon}
            logoAlt="viqueen.org"
            logoUrl={viqueenIcon}
        />
    );
};

export default function Navigation() {
    return (
        <div style={{ top: 0, position: 'fixed', left: 0, width: '100%' }}>
            <AtlassianNavigation
                label="viqueen.org"
                primaryItems={[<PrimaryButton>viqueen.org</PrimaryButton>]}
                renderProductHome={ViqueenHome}
                theme={theme}
            />
        </div>
    );
}
