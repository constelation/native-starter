// @flow
// Imports {{{

import Image from 'constelation-image'
import React from 'react'
import View from 'constelation-view'

import Button from 'shared/Button'

// }}}

type Props = {
  navigation: {
    navigate: Function,
  },
}

export default class Home extends React.Component<void, Props, void> {

  static navigationOptions = {
    tabBar: {
      label: 'Home',
      icon: ({ tintColor }) => (
        <Image
          source={require('images/icon-home.png')}
          tintColor={tintColor}
        />
      ),
    },
  }

  handleShowFullScreenModal = () => {
    this.props.navigation.navigate('Dummy')
  }

  handleShowFullScreenModalScene = () => {
    //TODO use custom Transition to support modal transition here
    // see CardStack https://github.com/react-community/react-navigation/blob/master/src/views/CardStack.js
    // and TransitionConfigs https://github.com/react-community/react-navigation/blob/master/src/views/TransitionConfigs.js
    this.props.navigation.navigate('Dummy')
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
