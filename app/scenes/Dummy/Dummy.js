// @flow

import React from 'react'
import { Actions } from 'react-native-router-flux'

import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

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
          <Text
            center
            size={20}
            color='white'
          >
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
    padding: 10,
  },
})
