// @flow

import React from 'react'

import {
  Animated,
  Platform,
  ScrollView,
} from 'react-native'

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
        {/* <Header size={25} style={{marginTop: 40}}>Header</Header> */}
        {/* <Text size={16} color='8D'>Text with color 8D</Text> */}
        {/* <Text size={16} color='RED'>Text with color RED</Text> */}
      </ScrollView>
    )
  }
}
