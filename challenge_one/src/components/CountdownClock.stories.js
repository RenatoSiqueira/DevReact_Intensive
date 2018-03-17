import React from 'react'
import  { storiesOf } from '@storybook/react'

import CountdownClock from './CountdownClock'

storiesOf('Countdown Clock', module)
    .add('with valid final date', () => <CountdownClock end="December 25, 2018"/>)
    .add('with invalid final date', () => <CountdownClock end="December 25, 2017"/>)
