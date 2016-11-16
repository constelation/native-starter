// @flow

import React from 'react'
import { Actions } from 'react-native-router-flux'

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import View from 'constelation-View'

export default class Dummy extends React.Component {
  handlePress = () => {
    Actions.pop()
  }

  render() {
    return (
      <View flex={1}>
        <StatusBar
          animated
          barStyle='light-content'
        />
        <TouchableOpacity style={styles.container} onPress={this.handlePress}>
          <Text style={styles.welcome}>
            HAI
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
})
