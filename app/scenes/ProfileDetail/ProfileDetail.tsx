// @flow
// Imports {{{

import Event_ from 'constelation-Event_'
import React from 'react'
import Text from 'constelation-Text'
import View from 'constelation-View'

// }}}

export default class ProfileDetail extends React.Component<any,any> {
  props: {
    value: number,
    onIncreaseCounter: Function,
  }

  render() {
    return (
      <View
        grow
        alignVertical='center'
      >
        <Text
          center
          size={20}
        >
          Profile Detail
        </Text>

        <Event_
          onPress={this.props.onIncreaseCounter}
          pressEffect='opacity'
        >
          <View margin={10}>
            <Text
              center
              size={20}
            >
              {this.props.value}
            </Text>
          </View>
        </Event_>
      </View>
    )
  }
}
