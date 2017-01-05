// @flow
// Imports {{{

import {
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import Text from 'constelation-Text'
import View from 'constelation-View'

// }}}

export default class ProfileDetail extends React.Component {
  props: {
    value: number,
    onIncreaseCounter: Function,
  }

  render() {
    return (
      <View
        flex={1}
        alignVertical='center'
      >
        <Text
          center
          size={20}
        >
          Profile Detail
        </Text>

        <TouchableOpacity onPress={this.props.onIncreaseCounter} >
          <View margin={10}>
            <Text
              center
              size={20}
            >
              {this.props.value}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
