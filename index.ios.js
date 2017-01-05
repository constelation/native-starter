// @flow
// Imports {{{

import { AppRegistry } from 'react-native'

import App from './app/scenes/App'

// }}}

// This disables a useful, but sometimes annoying warning message in the app
// Comment it to re-enable YellowBox

// $FlowFixMe: suppressing this while flowtype doesn't understand RN disableYellowBox
console.disableYellowBox = true

AppRegistry.registerComponent( 'NativeStarter', () => App )
