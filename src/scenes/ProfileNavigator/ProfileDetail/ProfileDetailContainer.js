// @flow
// Imports {{{

import { bind } from 'decko'
import { observer, inject } from 'mobx-react/native'
import React from 'react'

import type { Counter } from 'stores/counter'

import ProfileDetail from './ProfileDetail'

// }}}

type Props = {
  counter: Counter,
}

class ProfileDetailContainer extends React.Component<void, Props, void> {
  static navigationOptions = {
    headerTitle: 'Profile Detail',
  }

  @bind handleIncreaseCounter() {
    this.props.counter.increase()
  }

  render() {
    return (
      <ProfileDetail
        value={this.props.counter.value}
        onIncreaseCounter={this.handleIncreaseCounter}
      />
    )
  }
}

export default inject('counter')(observer(ProfileDetailContainer))

