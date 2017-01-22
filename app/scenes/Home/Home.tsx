// @flow
// Imports {{{

import { Actions } from 'react-native-router-flux'
import Image from 'constelation-image'
import React from 'react'
import View from 'constelation-View'

import Button from 'shared/Button'

// }}}

export default class Home extends React.Component<any,any> {

  handleShowFullScreenModal = () => {
    Actions['fullDetail']()
  }

  handleShowFullScreenModalScene = () => {
    Actions['fullModal']()
  }

  render() {
    return (
      <View
        center
        grow
      >
        <Image
          source={require('images/logo.png')}
        />

        <Button
          marginTop={60}
          label='Full screen Detail'
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
