// @flow
// Imports {{{

import Animate_ from 'constelation-animate_'
import Event_ from 'constelation-event_'
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

const EVENTS = {
  END_HERO: 'HOME_END_HERO',
}

// Showing controls of Animate_ with refs

class Logo extends React.Component<void, any, void> {
  node: Animate_
  rotating: boolean
  // rotating: boolean = true

  handleToggleRotation = () => {
    if (this.rotating === true) {
      this.node.stop()
      this.rotating = false
    }
    else {
      this.node.start()
      this.rotating = true
    }
  }

  setRef = node => {
    this.node = node
  }

  render() {
    return (
      <Event_
        pressEffect='opacity'
        onPress={this.handleToggleRotation}
      >
        <Animate_
          repeat
          // Note what happens if useNativeDriver is commented when opening modal
          useNativeDriver
          animation={`
            0: {
              rotate: '0deg',
            },
            1: {
              rotate: '360deg',
            }
          `}
          duration={20000}
          easing='linear'
          ref={this.setRef}
          // startEvent={EVENTS.END_HERO}
        >
          <Image
            source={require('images/logo.png')}
            width={134}
            height={121}
          />
        </Animate_>
      </Event_>
    )
  }
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
        <Animate_
          start
          animation={`
            0: {
              translateY: 100,
              scale: 1
            },
            1: {
              translateY: 0,
              scale: 1.3
            }
          `}
          duration={400}
          delay={700}
          easing='out'
          onEndEvent={EVENTS.END_HERO}
        >
          <View>
            <Logo />
          </View>
        </Animate_>

        <Animate_
          startOnEvent={EVENTS.END_HERO}
          animation='fadeIn'
          duration={300}
        >
          <View>
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
        </Animate_>

      </View>
    )
  }
}
