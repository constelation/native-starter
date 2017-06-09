// @flow
// Imports {{{

import { inject } from 'mobx-react/native'
import Event_ from 'constelation-event_'
import React from 'react'
import Text from 'constelation-text'
import View from 'constelation-view'

import type { Stores } from 'stores'

import Profile from './Profile'
import type { Props } from './Profile'

// }}}

class ProfileContainer extends React.Component {
  props: Props

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Profile',
    headerRight: (
      <Event_
        pressEffect='opacity'
        onPress={() => navigation.navigate('ProfileDetail')} // eslint-disable-line react/jsx-no-bind
      >
        <View paddingRight={20}>
          <Text> Detail </Text>
        </View>
      </Event_>
    ),
  })

  render() {
    return (
      <Profile {...this.props} />
    )
  }
}

export default inject(
  ({ counter }: Stores) => ({
    value: counter.value,
    onIncreaseCounter: counter.increase,
  })
)(ProfileContainer)
