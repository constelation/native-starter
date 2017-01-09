// @flow
// Imports {{{

import { Actions } from 'react-native-router-flux'
import Event_ from 'constelation-Event_'
import {
  Image,
} from 'react-native'
import React from 'react'
import Text from 'constelation-Text'
import Style_ from 'constelation-Style_'
import View from 'constelation-View'

// }}}

const Button = props => (
  <Event_
    onPress={props.onPress}
    pressEffect='opacity'
  >
    <Style_
      borderColor='black'
      borderWidth={1}
      borderRadius={1}
    >
      <View
        center
        paddingVertical={5}
        paddingHorizontal={10}
        marginTop={props.marginTop}
      >
        <Text color='black'>
          {props.label}
        </Text>
      </View>
    </Style_>
  </Event_>
)

export default class Home extends React.Component {

  handleShowFullScreenModal = () => {
    Actions.fullDetail()
  }

  handleShowFullScreenModalScene = () => {
    Actions.fullModal()
  }

  render() {
    return (
      <View
        center
        grow
      >
        <Image style={{width: 200, height: 200}} source={require('images/logo.png')} />

        <Button
          marginTop={60}
          label='Full screen Detail scene'
          onPress={this.handleShowFullScreenModal}
        />
        <Button
          marginTop={30}
          label='Full screen Modal scene'
          onPress={this.handleShowFullScreenModalScene}
        />

      </View>
    )
  }
}
