import { assign } from 'lodash';

const provider = () => {};

export const project = (name: string) => {
    // example of lodash breaking when you least expect it
    const data = assign(provider, { name });
    return `node-project: ${data.name}`;
};

console.info(project('hasnae'));
