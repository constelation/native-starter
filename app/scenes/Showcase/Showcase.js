// @flow
// Imports {{{

import Animate_ from 'constelation-Animate_'
import Col from 'constelation-Col'
import Event_ from 'constelation-Event_'
import Image from 'constelation-image'
import React from 'react'
import Row from 'constelation-Row'
import ScrollView from 'constelation-scroll-view'
import Style_ from 'constelation-Style_'
import Text from 'constelation-Text'
import View from 'constelation-View'

// }}}

const box1Animation = {
  from: {
    opacity: 0.2,
    width: 20,
    height: 20,
  },
  to: {
    opacity: 1,
    width: 200,
    height: 200,
  }
}

export default class Showcase extends React.Component {
  // What's this!? I can still define a custom navBar from within my component.
  // Will likely need this for a NavBar that animates up on scroll.
  static renderNavigationBar( /*props*/ ) {
    return (
      <Style_
        backgroundColor='#EFEFEF'
        borderBottomWidth={0.5}
        borderBottomColor='#828287'
      >
        <View
          alignVertical='center'
          paddingTop={10}
          position='absolute'
          top={0}
          height={64}
          right={0}
          left={0}
        >
          <Text
            center
            weight='500'
            size={18}
            color='#111111'
          >
            Showcase
          </Text>
        </View>
      </Style_>
    )
  }

  triggerBox1Animation = () => {
    this.refs.box1.trigger()
  }

  render() {
    return (
      <ScrollView
        grow
        marginTop={65}
        marginBottom={50}
      >
        <Row>
          <Event_
            onPress={this.triggerBox1Animation}
            // Note: this effect doesn't work because Animate_ replaces Opacity
            pressEffect='opacity'
          >
            <Animate_
              // repeat
              ref='box1'
              autoplay={false}
              duration={1000}
              delay={200}
              easing='inOut'
              // animation='fade-in'
              animation={box1Animation}
              onStart={() => {console.log('onStart')}}
              onEnd={() => {console.log('onEnd')}}
            >
              <Style_ backgroundColor='purple' >
                <View height={200} />
              </Style_>
            </Animate_>
          </Event_>

          <Animate_
            duration={400}
            animation='fadeOut'
          >
            <Style_ backgroundColor='green' >
              <View height={200} width={200} />
            </Style_>
          </Animate_>
        </Row>

        <Animate_
          animation={{
            0: {
              opacity: 0.5,
            },
            0.5: {
              opacity: 0,
              left: 20,
            },
            1: {
              opacity: 1,
              left: 0,
            }
          }}
          // easing={Easing.sin}
          duration={400}
        >
          <Image source={require('images/logo.png')} />
        </Animate_>

        <Style_
          backgroundColor='lightgrey'
          opacity={0.5}
        >
          <Row height={200} >
            <Style_ backgroundColor='red' >
              <View width={50} />
            </Style_>
            <Style_ backgroundColor='green' >
              <View width={50} />
            </Style_>
            <Style_ backgroundColor='blue' >
              <View width={50} />
            </Style_>
          </Row>
        </Style_>

        <Style_
          backgroundColor='grey'
          opacity={0.5}
        >
          <Col height={200} >
            <Style_ backgroundColor='red' >
              <View height={50} />
            </Style_>
            <Style_ backgroundColor='green' >
              <View height={50} />
            </Style_>
            <Style_ backgroundColor='blue' >
              <View height={50} />
            </Style_>
          </Col>
        </Style_>


      </ScrollView>
    )
  }
}
