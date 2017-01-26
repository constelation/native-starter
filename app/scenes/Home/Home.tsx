import Image from 'constelation-image'
import View from 'constelation-view'
import React from 'react'
import { Actions } from 'react-native-router-flux'

import Button from 'shared/Button'

export default class Home extends React.Component<void, void> {

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
