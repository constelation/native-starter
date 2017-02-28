// @flow
// Imports {{{

import { Dimensions } from 'react-native'
import Animate_, { AnimationConfig, emitAnimationEvent } from 'constelation-animate_'
import Event_ from 'constelation-event_'
import Image from 'constelation-image'
import React from 'react'
import ScrollView from 'constelation-scroll-view'
import Style_ from 'constelation-style_'
import View from 'constelation-view'

import SIZE from 'constants/SIZE'

import BoxSequence from './_/BoxSequence'

// }}}


export default class Showcase extends React.Component {
  constelation: Animate_

  static navigationOptions = {
    tabBar: {
      label: 'Showcase',
      icon: ({ tintColor }) => (
        <Image
          source={require('images/icon-lab.png')}
          tintColor={tintColor}
        />
       ),
    },
  }

  state = {
    startLogoAnimation: false,
  }

  componentDidMount() {
    // Note the global event emitted
    // Not the best example. but showing that it is possible
    setTimeout(() => {emitAnimationEvent('BOX_SEQUENCE')}, 1000)
  }

  handleStartLogoAnimation = () => {
    this.setState({startLogoAnimation: true})
  }

  handleEndLogoAnimation = () => {
    this.setState( {startLogoAnimation: false} )
  }

  render() {
    return (
      <AnimationConfig timingMultiplier={10} >
        <ScrollView
          grow
          marginTop={65}
          padding={35}
          maxHeight={Dimensions.get('window').height - SIZE.BOTTOM_BAR_HEIGHT}
        >

          <BoxSequence />

          <Event_ onPress={this.handleStartLogoAnimation} >
            <Animate_
              start={this.state.startLogoAnimation}
              repeat={2}
              direction='alternate'
              animation={`
              0: {
                opacity: 0.5,
                translateX: 0,
                rotate: '0deg',
              },
              0.5: {
                opacity: 0,
                translateX: 100,
                rotate: '180deg',
              },
              1: {
                opacity: 1,
                translateX: 200,
                rotate: '360deg',
              },
            `}
              duration={800}
              easing='linear'
              onEnd={this.handleEndLogoAnimation}
            >
              <Image source={require('images/logo.png')} />
            </Animate_>
          </Event_>

          <Style_
            backgroundColor='lightgrey'
            opacity={0.5}
            rotate='123deg'
            translateX={40}
          >
            <View
              horizontal
              height={200}
            >
              <Style_ backgroundColor='red' >
                <View width={50} />
              </Style_>
              <Style_ backgroundColor='green' >
                <View width={50} />
              </Style_>
              <Style_ backgroundColor='blue' >
                <View width={50} />
              </Style_>
            </View>
          </Style_>

          <Style_
            backgroundColor='grey'
            opacity={0.5}
          >
            <View height={200} >
              <Style_ backgroundColor='red' >
                <View height={50} />
              </Style_>
              <Style_ backgroundColor='green' >
                <View height={50} />
              </Style_>
              <Style_ backgroundColor='blue' >
                <View height={50} />
              </Style_>
            </View>
          </Style_>

        </ScrollView>
      </AnimationConfig>
    )
  }
}
