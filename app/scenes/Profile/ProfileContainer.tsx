// @flow
// Imports {{{

import { observer, inject } from 'mobx-react/native'
import React from 'react'

import Profile from './Profile'

// }}}

export default inject('counter')(observer(
  class ProfileContainer extends React.Component<any,any> {
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
