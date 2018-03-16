import React from 'react'
import ChildrenTest from './ChildrenTest'
import { storiesOf } from '@storybook/react'

storiesOf('ChildrenTest', module)
  .add('with some text', () => <ChildrenTest>Some Text</ChildrenTest>)

