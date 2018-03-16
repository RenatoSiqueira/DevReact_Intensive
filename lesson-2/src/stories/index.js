import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

//import ChildrenTest from '../ChildrenTest'

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

/*
Look at story file

storiesOf('ChildrenTest', module)
  .add('with text', () => <ChildrenTest>Some Text</ChildrenTest>)
*/

/* To import All files with '.story.js' in prefix name */
import { configure } from '@storybook/react'
const req = require.context('../', true, /\.story\.js$/)
function loadStories(){
  req.keys().forEach( filename => {
    req(filename)
  })
}

configure(loadStories, module)