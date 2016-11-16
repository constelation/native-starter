// @flow

import React from 'react'
import { observer, inject } from 'mobx-react/native'

import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import View from 'constelation-View'

export default inject('counter')(observer(
  class ProfileDetail extends React.Component {
    render() {
      return (
        <View
          flex={1}
          alignVertical='center'
        >
          <Text style={styles.welcome}>
            Profile Detail
          </Text>

          <TouchableOpacity onPress={() => this.props.counter.increase()} >
            <Text style={styles.welcome}>{this.props.counter.value}</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
))

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
