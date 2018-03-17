import React from 'react'
import { storiesOf } from '@storybook/react'

import ColorView from './ColorView'

storiesOf('ColorView', module)
    .add('with Color', () => <ColorView initialColor="#F2F333"/>)
