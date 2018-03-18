import React from 'react'
import { storiesOf } from '@storybook/react'

import FriendDateResult from './FriendDateResult'

storiesOf('Friendly Date', module)
    .add('with default date', () => <FriendDateResult finalDate="2018-02-28" type="default"/>)
    .add('with extensive date', () => <FriendDateResult finalDate="2019-01-25" type="extensive"/>)