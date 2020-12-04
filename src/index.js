import {mount, shallow} from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';

export const shallowWithStore = (Component, store) => {
    const ReactReduxComponent = React.cloneElement(Component, {store}, null);

    return shallow(ReactReduxComponent);
};

export const shallowWithStoreAndDive = (Component, store) => {
    const ReactReduxComponent = React.cloneElement(Component, {store}, null);

    return shallow(ReactReduxComponent).dive();
};

export const mountWithStore = (Component, store) => {
    const ComponentAlreadyWithProvider = React.cloneElement(Component, {store}, null);
    const ReactReduxComponent = <Provider store={store}>{Component}</Provider>;

    return mount(withContext ? ComponentAlreadyWithProvider : ReactReduxComponent);
};

export const shallowWithState = (Component, state) => {
    const store = {
        getState: () => state,
        subscribe: () => ({}),
        dispatch: () => ({}),
    };

    const ReactReduxComponent = React.cloneElement(Component, {store}, null);

    return shallow(ReactReduxComponent);
};

export const shallowWithStateAndDive = (Component, state) => {
    const store = {
        getState: () => state,
        subscribe: () => ({}),
        dispatch: () => ({}),
    };

    const ReactReduxComponent = React.cloneElement(Component, {store}, null);

    return shallow(ReactReduxComponent).dive();
};

export const mountWithState = (Component, state) => {
    const store = {
        getState: () => state,
        subscribe: () => ({}),
        dispatch: () => ({}),
    };

    const ComponentAlreadyWithProvider = React.cloneElement(Component, {store}, null);
    const ReactReduxComponent = <Provider store={store}>{Component}</Provider>;

    return mount(withContext ? ComponentAlreadyWithProvider : ReactReduxComponent);
};
