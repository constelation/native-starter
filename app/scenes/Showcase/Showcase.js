// @flow
// Imports {{{
import {
  Animated,
} from 'react-native'
import Col from 'constelation-Col'
import React from 'react'
import Row from 'constelation-Row'
import ScrollView from 'constelation-scroll-view'
import Style_ from 'constelation-Style_'
import Text from 'constelation-Text'
import View from 'constelation-View'

// }}}

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

  animatedSize = new Animated.Value(20)
  animatedOpacity = new Animated.Value(0)

  componentDidMount() {
    Animated.parallel([
      Animated.spring(
        this.animatedSize,
        {
          toValue: 200,
          friction: 1,
        }
      ),
      Animated.spring(
        this.animatedOpacity,
        {
          toValue: 1,
          friction: 1,
        }
      ),
    ]).start()
  }

  render() {
    return (
      <ScrollView
        grow
        marginTop={65}
        marginBottom={50}
      >

        <Style_
          backgroundColor='purple'
          opacity={this.animatedOpacity}
        >
          <View
            animated
            width={this.animatedSize}
            height={this.animatedSize}
          />
        </Style_>

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
