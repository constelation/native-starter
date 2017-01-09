// @flow
// Imports {{{

import { Actions } from 'react-native-router-flux'
import Event_ from 'constelation-Event_'
import {
  StatusBar,
} from 'react-native'
import React from 'react'
import Text from 'constelation-Text'
import Style_ from 'constelation-Style_'
import View from 'constelation-View'

// }}}

export default class Dummy extends React.Component {
  handlePress = () => {
    Actions.pop()
  }

  render() {
    return (
      <View
        grow
      >
        <StatusBar
          animated
          barStyle='light-content'
        />

        <Event_
          onPress={this.handlePress}
        >
          <Style_
            backgroundColor='black'
          >
            <View
              grow
              center
              padding={10}
            >
              <Text
                size={20}
                color='white'
              >
                HAI
              </Text>
            </View>
          </Style_>
        </Event_>
      </View>
    )
  }
}
