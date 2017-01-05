// @flow
// Imports {{{

import React from 'react'
import { observer, inject } from 'mobx-react/native'
import type { Counter } from 'stores/counter'

import ProfileDetail from './ProfileDetail'

// }}}

export default inject('counter')(observer(
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
))
