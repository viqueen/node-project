import { Client, ResolveResponse } from '@atlaskit/smart-card';
import { JsonLd } from 'json-ld-types';

export default class SimpleCardClient extends Client {
    fetchData(url: string): Promise<JsonLd.Response> {
        const response = {
            meta: {
                access: 'granted',
                visibility: 'public'
            },
            data: {
                name: url
            }
        } as ResolveResponse;
        return Promise.resolve(response);
    }
    prefetchData(url: string): Promise<JsonLd.Response | undefined> {
        return Promise.resolve(undefined);
    }
}
