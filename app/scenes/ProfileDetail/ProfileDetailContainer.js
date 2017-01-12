// @flow
// Imports {{{

import { observer, inject } from 'mobx-react/native'
import React from 'react'

import type { Counter } from 'stores/counter'

import ProfileDetail from './ProfileDetail'

// }}}

class ProfileDetailContainer extends React.Component {
  props: {
    counter: Counter
  }

  handleIncreaseCounter = () => {
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
