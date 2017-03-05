// @flow
// Imports {{{

import {
  StatusBar,
} from 'react-native'
import Event_ from 'constelation-event_'
import React from 'react'
import Style_ from 'constelation-style_'
import Text from 'constelation-text'
import View from 'constelation-view'

// }}}

type Props = {
  navigation: {
    goBack: Function,
  },
}

export default class Dummy extends React.Component<void, Props, void> {

  handlePress = () => {
    this.props.navigation.goBack()
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
