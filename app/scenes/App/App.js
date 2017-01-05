// @flow
// Imports {{{

import { Provider } from 'mobx-react/native'
import { Router } from 'react-native-router-flux'
import React from 'react'
import mobx from 'mobx'

import counter from 'stores/counter'

import scenes from '..'

// }}}

// throw an exception on any attempt to modify MobX state outside an action
mobx.useStrict( true )

// log all mobx actions when in development mode
if (__DEV__) {
  mobx.spy( ev => {
    if (ev.type === 'action') {
      console.log( ev.name )
    }
  })
}

// Will be passed to all Scenes
const getSceneStyle = (/*props*/) => ({
  backgroundColor: 'white',
})

const stores = { counter }

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores} >
        <Router
          scenes={scenes}
          getSceneStyle={getSceneStyle}
          navigationBarStyle={{backgroundColor: 'white'}}
          tabBarStyle={{backgroundColor: 'white'}}
          rightButtonTextStyle={{color: '#111111'}}
        />
      </Provider>
    )
  }
}
