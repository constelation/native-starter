// @flow
// Imports {{{

import { Provider } from 'mobx-react/native'
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'
import React from 'react'
import mobx from 'mobx'

import { createStores } from 'stores'

import Dummy from './Dummy'
import Home from './Home'
import ProfileNavigator from './ProfileNavigator'
import Showcase from './Showcase'

// }}}

// -- MobX --
// throw an exception on any attempt to modify MobX state outside an action
mobx.useStrict(true)

// log all mobx actions when in development mode
if (__DEV__) {
  mobx.spy(ev => {
    if (ev.type === 'action') {
      console.log(ev.name)
    }
  })
}

const stores = createStores()

// -- Routes --
//TODO: consider moving Tabs to its own folder
const Tabs = TabNavigator({
  Home: {
    screen: Home,
  },
  ProfileNavigator: {
    screen: ProfileNavigator,
  },
  Showcase: {
    screen: Showcase,
  },
}, {
  lazy: true,
  tabBarComponent: TabBarBottom, // override Android's default of top
  tabBarOptions: {
    activeTintColor: '#111',
    showIcon: true,
  },
})

const App = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Dummy: {
    screen: Dummy,
  },
}, {
  headerMode: 'none',
  cardStyle: {
    backgroundColor: 'white',
  },
  // mode: 'modal',
},
)

export default class Root extends React.Component {
  render() {
    return (
      <Provider {...stores} >
        <App />
      </Provider>
    )
  }
}
