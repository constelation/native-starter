// @flow
// Imports {{{

import { bind } from 'decko'
import Image from 'constelation-image'
import React from 'react'

import Home from './Home'

// }}}

type Props = {
  navigation: {
    navigate: Function,
  },
}

export default class HomeContainer extends React.Component<void, Props, void> {

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

  @bind
  handleShowFromRight() {
    this.props.navigation.navigate('Dummy')
  }

  @bind
  handleShowFromBottom() {
    //TODO use custom Transition to support modal transition here
    // see CardStack https://github.com/react-community/react-navigation/blob/master/src/views/CardStack.js
    // and TransitionConfigs https://github.com/react-community/react-navigation/blob/master/src/views/TransitionConfigs.js
    this.props.navigation.navigate('Dummy')
  }

  render() {
    return (
      <Home
        onShowFromRight={this.handleShowFromRight}
        onShowFromBottom={this.handleShowFromBottom}
      />
    )
  }
}
