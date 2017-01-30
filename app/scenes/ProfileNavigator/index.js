// @flow
// Imports {{{

import { StackNavigator } from 'react-navigation'
import { StyleSheet } from 'react-native'
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
    return <Navigator cardStyle={styles.card} />
  }
}

// Kind of a bummer that this style override is necessary to need see the grey default here:
// https://github.com/react-community/react-navigation/blob/master/src/views/Card.js#L81
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
})

