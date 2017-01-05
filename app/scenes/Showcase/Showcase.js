// @flow
// Imports {{{
import {
  Animated,
  Platform,
  ScrollView,
} from 'react-native'
import Col from 'constelation-Col'
import React from 'react'
import Row from 'constelation-Row'
import Style_ from 'constelation-Style_'
import View from 'constelation-View'

// }}}

export default class Showcase extends React.Component {
  // What's this!? I can still define a custom navBar from within my component.
  // Will likely need this for a NavBar that animates up on scroll.
  static renderNavigationBar( /*props*/ ) {
    return (
      <Animated.View
        style={{
          backgroundColor: '#EFEFEF',
          paddingTop: 0,
          top: 0,
          height: Platform.OS === 'ios' || Platform.Version > 19 ? 64 : 44,
          right: 0,
          left: 0,
          borderBottomWidth: 0.5,
          borderBottomColor: '#828287',
          position: 'absolute',
        }}
      >
        <Animated.Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontSize: 18,
            fontWeight: '500',
            color: '#111111',
            position: 'absolute',
            top: Platform.OS === 'ios' || Platform.Version > 19 ? 20 : 0,
            left: 0,
            right: 0,
          }}
        >
          Showcase
        </Animated.Text>
      </Animated.View>
    )
  }

  render() {
    return (
      <ScrollView style={{flex: 1, marginTop: 65, marginBottom: 50}}>

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

        <Style_ backgroundColor='grey' opacity={0.5} >
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
