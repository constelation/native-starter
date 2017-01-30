// @flow
// Imports {{{

import { observer, inject } from 'mobx-react/native'
import Event_ from 'constelation-Event_'
import React from 'react'
import Text from 'constelation-Text'
import View from 'constelation-View'

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
              onPress={() => props.navigate('ProfileDetail')}
              pressEffect='opacity'
            >
              <View marginRight={20}>
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
