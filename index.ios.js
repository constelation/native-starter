import { AppRegistry } from 'react-native'
import App from './app/scenes/App'

// This disables a useful, but sometimes annoying warning message in the app
// Comment next line to re-enable YellowBox
console.disableYellowBox = true

AppRegistry.registerComponent( 'NativeStarter', () => App )
