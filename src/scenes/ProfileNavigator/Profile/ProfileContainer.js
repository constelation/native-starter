// @flow
// Imports {{{

import { inject, observer } from 'mobx-react/native'
import Event_ from 'constelation-event_'
import React from 'react'
import Text from 'constelation-text'
import View from 'constelation-view'

import type { Counter } from 'stores/counter'

import Profile from './Profile'

// }}}

type Props = {
  counter: Counter
}

export default inject('counter')(observer(
  class ProfileContainer extends React.Component<void, Props, void> {

    static navigationOptions = {
      title: () => `Profile`,

      header: (props) => {
        return {
          right: (
            <Event_
              pressEffect='opacity'
              onPress={() => props.navigate('ProfileDetail')} // eslint-disable-line react/jsx-no-bind
            >
              <View paddingRight={20}>
                <Text>Detail</Text>
              </View>
            </Event_>
          ),
        }
      },
    }

    handleIncreaseCounter = () => {
      this.props.counter.increase()
    }

    render() {
      return (
        <Profile
          value={this.props.counter.value}
          onIncreaseCounter={this.handleIncreaseCounter}
        />
      )
    }
  }
))
