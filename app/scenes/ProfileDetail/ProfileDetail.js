// @flow

import React from 'react'
import { observer, inject } from 'mobx-react/native'

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default inject('counter')(observer(
  class ProfileDetail extends React.Component {
    render() {
      return (
        <View style={styles.container}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
