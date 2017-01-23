import Animate_ from 'constelation-Animate_'
import Col from 'constelation-Col'
import Event_ from 'constelation-Event_'
import Image from 'constelation-image'
import Row from 'constelation-Row'
import ScrollView from 'constelation-scroll-view'
import Style_ from 'constelation-Style_'
import Text from 'constelation-Text'
import View from 'constelation-View'
import React from 'react'

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
  },
}

export default class Showcase extends React.Component<void, void> {
  // box1: React.ReactElement<Animate_>
  box1: any

  // What's this!? I can still define a custom navBar from within my component.
  // Will likely need this for a NavBar that animates up on scroll.
  static renderNavigationBar( /*props*/) {
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
    this.box1.trigger()
  }

  setBox1Ref = ref => {
    this.box1 = ref
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
            hitSlop={20}
            onPress={this.triggerBox1Animation}
            // Note: this effect doesn't work because Animate_ replaces Opacity
            pressEffect='opacity'
          >
            <Animate_
              // repeat
              ref={this.setBox1Ref}
              autoplay={false}
              duration={1000}
              delay={200}
              easing='inOut'
              // animation='fade-in'
              animation={box1Animation}
              // tslint:disable-next-line:no-console jsx-no-lambda
              onStart={() => { console.log('onStart') }}
              // tslint:disable-next-line:no-console jsx-no-lambda
              onEnd={() => { console.log('onEnd') }}
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
            },
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
