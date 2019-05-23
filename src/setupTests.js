import React from 'react'
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'
// require('jest-localstorage-mock')

global.React = React
global.render = render
global.cleanup = cleanup
global.fireEvent = fireEvent
global.waitForElement = waitForElement
