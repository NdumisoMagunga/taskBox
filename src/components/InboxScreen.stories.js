import React from 'react';
import {storiesOf} from '@storybook/react';
import {Provider} from 'react-redux';
import {action} from  '@storybook/addon-actions';

import PureInboxScreen from './InboxScreen';
import {defaultTasks} from './TastList.stories';

//a super simple mock of a redux store
const store = {
    getState: () => {
        return{
            tasks: defaultTasks,
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

storiesOf('InboxScreen', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('default', () => <PureInboxScreen />)
    .add('error', () => <PureInboxScreen error="something" />)
    