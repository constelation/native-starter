// @flow
// Imports {{{

import { inject } from 'mobx-react/native'
import React from 'react'

import type { Stores } from 'stores'

import ProfileDetail from './ProfileDetail'

// }}}

type Props = {
  value: number,
  onIncrease: Function,
}

class ProfileDetailContainer extends React.Component {
  props: Props

  static navigationOptions = {
    headerTitle: 'Profile Detail',
  }

  render() {
    return (
      <ProfileDetail
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
)(ProfileDetailContainer)
