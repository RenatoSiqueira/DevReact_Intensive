import React from 'react'

/* To import All files with '.stories.js' in prefix name */
import { configure } from '@storybook/react'
const req = require.context('../', true, /\.stories\.js$/)
function loadStories(){
  req.keys().forEach( filename => {
    req(filename)
  })
}

configure(loadStories, module)
