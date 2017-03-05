// @flow
// Imports {{{

import { StackNavigator } from 'react-navigation'
import Image from 'constelation-image'
import React from 'react'

import Profile from './Profile'
import ProfileDetail from './ProfileDetail'

// }}}

const Navigator = StackNavigator({
  Profile: {
    screen: Profile,
  },
  ProfileDetail: {
    screen: ProfileDetail,
  },
}, {
  headerMode: 'float',
  cardStyle: {
    backgroundColor: 'white',
  },
})

export default class ProfileStack extends React.Component {

  static navigationOptions = {
    tabBar: {
      label: 'Profile',
      icon: ({ tintColor }) => (
        <Image
          source={require('images/icon-user.png')}
          tintColor={tintColor}
        />
        ),
    },
  }

  render() {
    return <Navigator />
  }
}
