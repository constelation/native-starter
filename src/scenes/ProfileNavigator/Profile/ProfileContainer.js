// @flow
// Imports {{{

import { inject } from 'mobx-react/native'
import Event_ from 'constelation-event_'
import React from 'react'
import Text from 'constelation-text'
import View from 'constelation-view'

import type { Stores } from 'stores'

import Profile from './Profile'

// }}}

type Props = {
  value: number,
  onIncrease: Function,
}

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
      <Profile
        value={this.props.value}
        onIncreaseCounter={this.props.onIncrease}
      />
    )
  }
}

export default inject(
  ({ counter }: Stores) => ({
    value: counter.value,
    onIncrease: counter.increase,
  })
)(ProfileContainer)
