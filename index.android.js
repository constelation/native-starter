// @flow

import { AppRegistry } from 'react-native'
import App from './app/scenes/App'

// This disables a useful, but sometimes annoying warning message in the app
// Comment it to re-enable YellowBox

// $FlowFixMe: suppressing this while flowtype doesn't understand RN disableYellowBox
console.disableYellowBox = true

// Set up these base components as global so we don't need to import them in
// every file
global.View = require('constelation-View')
global.Row = require('constelation-Row')
global.Col = require('constelation-Col')
global.Style_ = require('constelation-Style_')
global.Text = require('constelation-Text')


AppRegistry.registerComponent( 'NativeStarter', () => App )
