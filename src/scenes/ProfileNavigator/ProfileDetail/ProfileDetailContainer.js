// @flow
// Imports {{{

import { inject } from 'mobx-react/native'
import React from 'react'

import type { Stores } from 'stores'

import ProfileDetail from './ProfileDetail'
import type { Props } from './ProfileDetail'

// }}}

class ProfileDetailContainer extends React.Component {
  props: Props

  static navigationOptions = {
    headerTitle: 'Profile Detail',
  }

  render() {
    return (
      <ProfileDetail {...this.props} />
    )
  }
}

export default inject(
  ({ counter }: Stores) => ({
    value: counter.value,
    onIncreaseCounter: counter.increase,
  })
)(ProfileDetailContainer)
