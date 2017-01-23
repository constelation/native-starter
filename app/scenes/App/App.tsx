import mobx from 'mobx'
import { Provider } from 'mobx-react/native'
import React from 'react'
import { Router } from 'react-native-router-flux'
import counter from 'stores/counter'

import scenes from '..'

// throw an exception on any attempt to modify MobX state outside an action
mobx.useStrict(true)

// log all mobx actions when in development mode
if (__DEV__) {
  mobx.spy(ev => {
    if (ev.type === 'action') {
      // tslint:disable-next-line:no-console
      console.log(ev.name)
    }
  })
}

// Will be passed to all Scenes
const getSceneStyle = (/*props*/) => ({
  backgroundColor: 'white',
})

const stores = { counter }

export default class App extends React.Component<void, void> {
  render() {
    return (
      <Provider {...stores} >
        <Router
          scenes={scenes}
          getSceneStyle={getSceneStyle}
          navigationBarStyle={{ backgroundColor: 'white' }}
          tabBarStyle={{ backgroundColor: 'white' }}
          rightButtonTextStyle={{ color: '#111111' }}
        />
      </Provider>
    )
  }
}