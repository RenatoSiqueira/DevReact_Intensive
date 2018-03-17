import React from 'react'
import { storiesOf } from '@storybook/react'

import FriendDateResult from './FriendDateResult'

storiesOf('Friend Date', module)
    .add('with default date', () => <FriendDateResult finalDate="2018-02-28"/>)
    .add('with extensive date', () => <FriendDateResult type="extensive" finalDate="28 de Janeiro de 2019"/>)