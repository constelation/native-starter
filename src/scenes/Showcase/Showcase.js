// @flow
// Imports {{{

import { Col, Row, View } from 'constelation-view'
import { Dimensions } from 'react-native'
import { bind } from 'decko'
import Animate_, {
  AnimationConfig,
  emitAnimationEvent,
} from 'constelation-animate_'
import Event_ from 'constelation-event_'
import Image from 'constelation-image'
import React from 'react'
import ScrollView from 'constelation-scroll-view'
import Space from 'constelation-space'
import Style_ from 'constelation-style_'

import SIZE from 'constants/SIZE'

import BoxSequence from './_/BoxSequence'

// }}}

export default class Showcase extends React.Component {
  constelation: Animate_

  static navigationOptions = {
    tabBarLabel: 'Showcase',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('images/icon-lab.png')}
        tintColor={tintColor}
      />
    ),
  }

  state = {
    startLogoAnimation: false,
  }

  componentDidMount() {
    // Note the global event emitted
    // Not the best example. but showing that it is possible
    setTimeout(() => {
      emitAnimationEvent('BOX_SEQUENCE')
    }, 1000)
  }

  @bind handleStartLogoAnimation() {
    this.setState({ startLogoAnimation: true })
  }

  @bind handleEndLogoAnimation() {
    this.setState({ startLogoAnimation: false })
  }

  render() {
    return (
      <AnimationConfig timingMultiplier={10}>
        <ScrollView
          grow
          marginTop={65}
          padding={35}
          maxHeight={Dimensions.get('window').height - SIZE.BOTTOM_BAR_HEIGHT}
        >

          <BoxSequence />

          <Event_ onPress={this.handleStartLogoAnimation}>
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
            <Row
              align='stretch'
              height={200}
            >
              <Style_ backgroundColor='red'>
                <View width={50} />
              </Style_>
              <Space size={50} />
              <Style_ backgroundColor='green'>
                <View width={50} />
              </Style_>
              <Space size={50} />
              <Style_ backgroundColor='blue'>
                <View width={50} />
              </Style_>
            </Row>
          </Style_>

          <Style_
            backgroundColor='grey'
            opacity={0.5}
          >
            <Col height={200}>
              <Style_ backgroundColor='red'>
                <View height={50} />
              </Style_>
              <Style_ backgroundColor='green'>
                <View height={50} />
              </Style_>
              <Style_ backgroundColor='blue'>
                <View height={50} />
              </Style_>
            </Col>
          </Style_>

        </ScrollView>
      </AnimationConfig>
    )
  }
}

