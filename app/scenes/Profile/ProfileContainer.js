// @flow
// Imports {{{

import React from 'react'
import { observer, inject } from 'mobx-react/native'
import type { Counter } from 'stores/counter'

import Profile from './Profile'

// }}}

export default inject('counter')(observer(
  class ProfileContainer extends React.Component {
    props: {
      counter: Counter
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
